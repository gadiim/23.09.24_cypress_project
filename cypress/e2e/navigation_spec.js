// describe('Tests', function () {
//     it('should display all navigation elements', function () {
//         // exeptions
//         cy.on('uncaught:exception', (err, runnable) => {
//             return false;
//         });

//         // cy.viewport(1920, 1080); // full screen
//         // cy.visit('https://telnyx.com/');
//         // const elements = [
//         //     'Products',
//         //     'Solutions',
//         //     'Pricing',
//         //     'Why Telnyx',
//         //     'Resources',
//         //     'Developers',
//         //     'Shop',
//         //     'Contact us',
//         //     'Log in ',
//         //     'Sign Up'
//         // ];

//         // cy.get('#__next > main > header').should('be.visible').then(() => {
//         //  cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a > svg').should('be.visible'); // logo 
//         //     elements.forEach(element => {
//         //         cy.contains(element).should('be.visible');
//         //     });
//         // });
// ////////////////////////////////////////////////////////////////////////

// // // 2. Set the screen resolution to 1280 x 800 px.
// //         cy.viewport(1280,800);      
// // // 3. Go to https://telnyx.com/.  
// //         cy.visit('https://telnyx.com/');
// //         const elements = [
// //             'Products',
// //             'Solutions',
// //             'Pricing',
// //             'Why Telnyx',
// //             'Resources',
// //             'Developers',
// //             'Shop',
// //             'Contact us',
// //             'Log in '
// //         ];
// // // 4. Check for the display of the header.
// //         cy.get('#__next > main > header').should('be.visible').then(() => {
// // // 5. If the header is displayed, check for the display of the navigation panel elements: 
// // // 5.1. Logo 
// //             cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a > svg').should('be.visible'); // logo 
// // // 5.2. Sign Up
// //             cy.contains('Sign Up').should('be.visible');
// // // 5.3. Main menu
// //             cy.contains('Main menu').should('be.visible');
// // // 5.3. If the Main menu is displayed, check the display of submenu elements: 
// //             cy.contains('Main menu').click().then(() => {
// //                 elements.forEach(element => {
// //                     cy.contains(element).should('be.visible');
// //                 });
// //             });
// //         });
        

//         // cy.get('#__next > main > header').should('be.visible').then(() => {  //header

//         // cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-idbhasO-css > a > svg').should('be.visible'); // logo
//         // cy.contains('Products').should('be.visible')
//         // cy.contains('Solutions').should('be.visible');
//         // cy.contains('Pricing').should('be.visible');
//         // cy.contains('Why Telnyx').should('be.visible');
//         // cy.contains('Resources').should('be.visible');
//         // cy.contains('Developers').should('be.visible');
//         // cy.contains('Shop').should('be.visible');
//         // cy.contains('Contact us').should('be.visible');
//         // cy.contains('Log in ').should('be.visible');
//         // cy.contains('Sign Up').should('be.visible');

//         // });

//         // cy.contains('Products').should('not.be.visible').then(() => {
//         //     cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-iiKfiPC-css.c-jRzmDo > div').click();
//         // });
//         // cy.get('#__next > main > header > div > div > div.c-buvHyO.c-buvHyO-iiKfiPC-css.c-jRzmDo > div').should('be.visible');



//         // cy.contains('Modular, resilient communications and connectivity').should('be.visible').then(() => {
//         //     cy.log('Вижу цей елемент');



//         // cy.contains('SIGN UP').should('be.visible');

//         // cy.contains('SIGN UP').click();

//         // cy.contains('Solutions').should('be.visible');
//         // cy.contains('Pricing').should('be.visible');
//         // cy.contains('Why Telnyx').should('be.visible');
//         // cy.contains('Resources').should('be.visible');
//         // cy.contains('Developers').should('be.visible');
//         // cy.contains('Shop').should('be.visible');
//         // cy.contains('Contact Us').should('be.visible');
//         // cy.contains('Log In').should('be.visible');
//         // cy.contains('Sign Up').should('be.visible');
//     });
// });
