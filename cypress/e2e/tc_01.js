import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import { navElementsFullScreen } from './page_object/data';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const _header = new Header();

describe('Test Header (Full Screen)', function () {
    it('should display all navigation elements in full screen (1920x1080)', function () {
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
});