import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();

describe('Test Footer (Full Screen)', function () {

    it('should verify the presence of social media links, click it, and check the URL', function () {
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.mainPage();
        // Twitter
        cy.contains('Twitter').click();
        cy.wait(2000);
        cy.url().should('include', 'x.com');
        // LinkedIn
        cy.contains('LinkedIn').click();
        cy.wait(2000);
        cy.url().should('eq', 'https://www.linkedin.com/company/telnyx/')
        // Facebook
        cy.contains('Facebook').invoke('removeAttr', 'target').click(); // same window
        cy.wait(2000);
        cy.url().should('include', 'facebook.com');
    });
});