class Header {

    headerSelector() {
        return cy.get('#__next > main > header')
    };

    logoSelector() {
        return cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a > svg')
    };
};

export default Header;