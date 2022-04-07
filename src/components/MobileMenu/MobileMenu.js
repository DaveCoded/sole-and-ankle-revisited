import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <Overlay isOpen={isOpen}>
            <Content>
                <ButtonWrapper>
                    <UnstyledButton onClick={onDismiss}>
                        <Icon id="close" aria-hidden />
                        <VisuallyHidden>Close</VisuallyHidden>
                    </UnstyledButton>
                </ButtonWrapper>
                <Nav>
                    <a href="/sale" style={{ color: 'var(--secondary)' }}>
                        Sale
                    </a>
                    <a href="/new">New&nbsp;Releases</a>
                    <a href="/men">Men</a>
                    <a href="/women">Women</a>
                    <a href="/kids">Kids</a>
                    <a href="/collections">Collections</a>
                </Nav>
                <Footer>
                    <a href="/terms">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>
                </Footer>
            </Content>
        </Overlay>
    );
};

const Overlay = styled(DialogOverlay)`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gray-overlay);
    justify-content: flex-end;

    @media ${QUERIES.tabletAndDown} {
        display: flex;
    }
`;

const Content = styled(DialogContent)`
    background: white;
    width: min(80%, 550px);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px;
`;

const ButtonWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-right: -10px;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    line-height: 18px;
    gap: 22px;
    text-transform: uppercase;
    a {
        text-decoration: none;
        color: var(--gray-900);
        font-weight: var(--weight-medium);
    }
`;

const Footer = styled.footer`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 14px;
    a {
        color: var(--gray-700);
        font-weight: var(--weight-normal);
        text-decoration: none;
        font-size: 0.875rem;
        cursor: pointer;
        line-height: 16px;
    }
`;

export default MobileMenu;
