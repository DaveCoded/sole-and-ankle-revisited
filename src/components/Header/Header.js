import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const openMobileMenu = () => setShowMobileMenu(true);
    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Side>
                    <Logo />
                </Side>
                <Nav>
                    <NavLink href="/sale">Much longer links</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Overflow issues</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Side>
                    <MobileNav>
                        <UnstyledButton>
                            <Icon id="shopping-bag" />
                        </UnstyledButton>
                        <UnstyledButton>
                            <Icon id="search" />
                        </UnstyledButton>
                        <UnstyledButton onClick={openMobileMenu}>
                            <Icon id="menu" />
                        </UnstyledButton>
                    </MobileNav>
                </Side>
            </MainHeader>

            <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 73px;
    border-bottom: 1px solid var(--gray-300);
    overflow: auto;
`;

const Nav = styled.nav`
    display: flex;
    gap: clamp(8px, 2vw, 48px);
    margin: 0px 48px;

    @media ${QUERIES.tabletAndDown} {
        display: none;
    }
`;

const MobileNav = styled.nav`
    display: none;

    @media ${QUERIES.tabletAndDown} {
        display: flex;
        justify-content: flex-end;
        gap: clamp(24px, 5vw, 38px);
    }
`;

const Side = styled.div`
    flex: 1;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--gray-900);
    font-weight: var(--weight-medium);
    white-space: nowrap;

    &:first-of-type {
        color: var(--secondary);
    }
`;

export default Header;
