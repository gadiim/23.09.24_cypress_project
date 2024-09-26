import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import { navUrls, navElementsFullScreen, email, first_name, last_name, password } from './page_object/data';
import { faker } from '@faker-js/faker';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const _header = new Header();

describe('Test (Full Screen)', function () {
    xit('should display all navigation elements in full screen (1920x1080)', function () {
        // exeptions
        _exeption.exeption();
        // 1. Open the browser.
        // 2. Set the screen resolution to 1920 x 1080 px.
        viewPort.fullScreen();
        // 3. Go to https://telnyx.com/.
        urlVisit.mainPage();
        // Check for the display of the header.
        _header.headerSelector().should('be.visible').then(() => {
            _header.logoSelector().should('be.visible'); // logo
            navElementsFullScreen.forEach(element => {
                cy.contains(element).should('be.visible');
            });
        });
    });

    xit('should navigate to the home page when the home button is clicked', function () {
        // exeptions
        _exeption.exeption();
        // 1. Open the browser.
        // 2. Set the screen resolution to 1920 x 1080 px.
        viewPort.fullScreen();
        // 3. Navigate to https://telnyx.com/.
        urlVisit.mainPage();
        // 4. Navigate to the Products page.
        // 6. Navigate to the Solutions page.
        // 8. Navigate to the Pricing page.
        // 10. Navigate to the Why Telnyx page.
        // 12. Navigate to the Resources page.
        navUrls.forEach((url) => {
            url().then(() => {
                // 7, 9, 11, 13 Return to the main page using the Logo (Home Page) element.
                cy.contains('Home').then(($home) => {
                    if ($home.length) {
                        cy.contains('Home').click();
                    }
                    // else {
                    //     cy.go('back');
                    // }
                });
            });
        });
    });

    xit('should failed check sign up registration (not valid data)', function () {

        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.mainPage();
        cy.contains('Sign Up').click();
        cy.get('input[id="email"]').type(email).should('have.value', email);
        cy.get('input[id="first_name"]').type(first_name).should('have.value', first_name);
        cy.get('input[id="last_name"]').type(last_name).should('have.value', last_name);
        cy.get('input[id="password"]').type(password).should('have.value', password);
        cy.get('input[id="terms_and_conditions"]').click();
        cy.get('input[id="subscription_opt_in"]').click();
        cy.get('button[type="submit"]').contains('SIGN UP').should('be.visible').click();
        cy.contains('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.').should('be.visible');
    });

    xit('should successfully(??) check sign up registration', function () {
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.mainPage();
        cy.contains('Sign Up').click();
        cy.get('input[id="email"]').type(faker.internet.email());
        cy.get('input[id="first_name"]').type(faker.person.firstName());
        cy.get('input[id="last_name"]').type(faker.person.lastName());
        cy.get('input[id="password"]').type('ValidPassword123!');
        cy.get('input[id="terms_and_conditions"]').click();
        cy.get('input[id="subscription_opt_in"]').click();
        cy.get('button[type="submit"]').contains('SIGN UP').should('be.visible').click();
    });

    xit('should scroll to the footer and ensure it is visible', function () {
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.mainPage();
        cy.get('footer').scrollIntoView().should('be.visible');  
    });

    it('should verify the presence of social media links, click it, and check the URL', function () {
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.mainPage();
        cy.contains('LinkedIn').click();
        cy.url().should('eq', 'https://www.linkedin.com/company/telnyx/');
        cy.contains('Twitter').click();
        cy.url().should('include', 'x.com');
        cy.contains('Facebook').click();
        cy.url().should('eq', 'https://www.facebook.com/Telnyx/');
    });
});
