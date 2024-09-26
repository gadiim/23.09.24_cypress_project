import UrlVisit from '././page_object/url';
import ViewPort from '././page_object/viewport';
import Header from './page_object/header_elements';
import navElementsFullScreen from '././page_object/data';

const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const _header = new Header();
const elements = navElementsFullScreen;

describe('Check Display of Navigation Panel Elements (Full Screen)', function () {
    it('should display all navigation elements in full screen (1920x1080)', function () {
// exeptions
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
// Set the screen resolution to 1920 x 1080 px.
        viewPort.fullScreen();
// Go to https://telnyx.com/.
        urlVisit.mainPage();
// Check for the display of the header.
        _header.headerSelector().should('be.visible').then(() => {
            _header.logoSelector().should('be.visible'); // logo 
            elements.forEach(element => {
                cy.contains(element).should('be.visible');
            });
        });
    });
});