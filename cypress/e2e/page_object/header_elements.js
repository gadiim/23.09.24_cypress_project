class Header {

    headerSelector() {
        return cy.get('.c-eceNPt > .c-cUhiIV')
    };

    homeSelector() {
        return cy.get('.c-fjNNbA')
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