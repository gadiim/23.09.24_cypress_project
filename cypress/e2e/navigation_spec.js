describe('Tests', function () {
    it('should display all navigation elements', function () {
        // exeptions
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.viewport(1920, 1080); // full screen
        cy.visit('https://telnyx.com/');
        const elements = [
            'Products',
            'Solutions',
            'Pricing',
            'Why Telnyx',
            'Resources',
            'Developers',
            'Shop',
            'Contact us',
            'Log in ',
            'Sign Up'
        ];

        cy.get('#__next > main > header').should('be.visible').then(() => {
            elements.forEach(element => {
                cy.contains(element).should('be.visible');
            });
        });

        // cy.visit('https://telnyx.com/');

        // cy.viewport(1920,1080);

        // cy.get('#__next > main > header').should('be.visible').then(() => {  //header

        // cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a > svg').should('be.visible'); // logo
        // cy.contains('Products').should('be.visible')
        // cy.contains('Solutions').should('be.visible');
        // cy.contains('Pricing').should('be.visible');
        // cy.contains('Why Telnyx').should('be.visible');
        // cy.contains('Resources').should('be.visible');
        // cy.contains('Developers').should('be.visible');
        // cy.contains('Shop').should('be.visible');
        // cy.contains('Contact us').should('be.visible');
        // cy.contains('Log in ').should('be.visible');
        // cy.contains('Sign Up').should('be.visible');

        // });

        // cy.contains('Products').should('not.be.visible').then(() => {
        //     cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-iiKfiPC-css.c-jRzmDo > div').click();
        // });
        // cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-iiKfiPC-css.c-jRzmDo > div').should('be.visible');



        // cy.contains('Modular, resilient communications and connectivity').should('be.visible').then(() => {
        //     cy.log('Вижу цей елемент');



        // cy.contains('SIGN UP').should('be.visible');

        // cy.contains('SIGN UP').click();

        // cy.contains('Solutions').should('be.visible');
        // cy.contains('Pricing').should('be.visible');
        // cy.contains('Why Telnyx').should('be.visible');
        // cy.contains('Resources').should('be.visible');
        // cy.contains('Developers').should('be.visible');
        // cy.contains('Shop').should('be.visible');
        // cy.contains('Contact Us').should('be.visible');
        // cy.contains('Log In').should('be.visible');
        // cy.contains('Sign Up').should('be.visible');
    });
});
