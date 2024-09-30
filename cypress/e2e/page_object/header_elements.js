class Header {

    headerSelector() {
        return cy.get('#__next > main > header')
    };

    logoSelector() {
        return cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a > svg')
    };

    shopSelector() {
        return cy.get('[href="https://shop.telnyx.com"]')
    };

    contactUsSelector() {
        return cy.get('.c-glDvHT > [href="/contact-us"]')
    };

    logInSelector() {
        return cy.get('[href="https://portal.telnyx.com/"]')
    };

    signUpSelector() {
        return cy.get('.c-buvHyO-iiKfiPC-css')
    };
};

export default Header;