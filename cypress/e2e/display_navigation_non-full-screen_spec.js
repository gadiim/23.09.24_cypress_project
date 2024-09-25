describe('Check Display of Navigation Panel Elements (non Full Screen)', function () {
    it('should display all navigation elements in non-full screen (1280x800)', function () {
// exeptions
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

// 2. Set the screen resolution to 1280 x 800 px.
        cy.viewport(1280,800);      
// 3. Go to https://telnyx.com/.  
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
            'Log in '
        ];
// 4. Check for the display of the header.
        cy.get('#__next > main > header').should('be.visible').then(() => {
// 5. If the header is displayed, check for the display of the navigation panel elements: 
// 5.1. Logo 
            cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a > svg').should('be.visible'); // logo 
// 5.2. Sign Up
            cy.contains('Sign Up').should('be.visible');
// 5.3. Main menu
            cy.contains('Main menu').should('be.visible');
// 5.3. If the Main menu is displayed, check the display of submenu elements: 
            cy.contains('Main menu').click().then(() => {
                elements.forEach(element => {
                    cy.contains(element).should('be.visible');
                });
            });
        });

    });
});