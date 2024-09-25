describe('Tests', function () {
    it('should display all navigation elements in full screen (1920x1080)', function () {
// exeptions
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
// Set the screen resolution to 1920 x 1080 px.
        cy.viewport(1920, 1080); 
// Go to https://telnyx.com/.
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
// Check for the display of the header.
        cy.get('#__next > main > header').should('be.visible').then(() => { 
            elements.forEach(element => {
                cy.contains(element).should('be.visible');
            });
        });
    });
});