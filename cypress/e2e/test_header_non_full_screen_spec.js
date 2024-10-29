import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import {navElementsNonFullScreen} from './page_object/data';
  
const exceptionObject = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const headerObject = new Header();
const elements = navElementsNonFullScreen;

describe('Test Header telnyx.com (non Full Screen)', function () {
    it('should display all navigation elements in non-full screen (1280x800)', function () {
        exceptionObject.exeption();
        viewPort.nonFullScreen();
        urlVisit.mainPage();
        headerObject.homeSelector().should('be.visible');
        cy.contains('Sign Up').should('be.visible');
        cy.contains('Main menu').should('be.visible').click();
        elements.forEach(element => {
            cy.contains(element).should('be.visible');
        });
    });
});