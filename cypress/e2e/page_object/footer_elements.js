class Footer {
    footerSelector() {
        return cy.get('footer');
    }

    twitterLink() {
        return cy.contains('Twitter');
    }

    linkedInLink() {
        return cy.contains('LinkedIn');
    }

    facebookLink() {
        return cy.contains('Facebook');
    }

    scrollToFooter() {
        this.footerSelector().scrollIntoView();
    }

    clickTwitter() {
        this.twitterLink().invoke('removeAttr', 'target').click();
    }

    clickLinkedIn() {
        this.linkedInLink().invoke('removeAttr', 'target').click();
    }

    clickFacebook() {
        this.facebookLink().invoke('removeAttr', 'target').click();
    }

    verifyUrl(expectedUrl, timeout = 5000) {
        cy.url({ timeout }).should('include', expectedUrl);
    }
}

export default Footer;
