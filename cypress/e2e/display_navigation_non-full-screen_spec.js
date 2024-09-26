import UrlVisit from '././page_object/url';
import ViewPort from '././page_object/viewport';
import Header from './page_object/header_elements';
import navElementsNonFullScreen from '././page_object/data';

const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const _header = new Header();
const elements = navElementsNonFullScreen;

describe('Check Display of Navigation Panel Elements (non Full Screen)', function () {
    it('should display all navigation elements in non-full screen (1280x800)', function () {
// exeptions
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

// 2. Set the screen resolution to 1280 x 800 px.
        viewPort.nonFullScreen();     
// 3. Go to https://telnyx.com/.  
        urlVisit.mainPage();
// 4. Check for the display of the header.
        _header.headerSelector().should('be.visible').then(() => {
// 5. If the header is displayed, check for the display of the navigation panel elements: 
// 5.1. Logo 
            _header.logoSelector().should('be.visible'); // logo 
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