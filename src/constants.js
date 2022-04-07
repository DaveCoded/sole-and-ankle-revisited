const BREAKPOINTS = {
    phone: 37.5,
    tablet: 59.375,
    laptop: 81.25
};

export const QUERIES = {
    phoneAndDown: `(max-width: ${BREAKPOINTS.phone}rem)`,
    tabletAndDown: `(max-width: ${BREAKPOINTS.tablet}rem)`,
    laptopAndDown: `(max-width: ${BREAKPOINTS.laptop}rem)`
};
