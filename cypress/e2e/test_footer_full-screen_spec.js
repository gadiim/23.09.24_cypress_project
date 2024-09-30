import MyExeption from './page_object/exeptions';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();

describe('Test Footer (Full Screen)', function () {
    
    it('should scroll to the footer and ensure it is visible', function () {
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
        // cy.url().should('include', 'linkedin');
        cy.contains('Twitter').click();
        cy.url().should('include', 'x.com');
        cy.contains('Facebook').click();
        // cy.url().should('include', 'facebook');
    });
});