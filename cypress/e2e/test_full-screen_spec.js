import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import { navUrls, navElementsFullScreen } from './page_object/data';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const _header = new Header();
const elements = navElementsFullScreen;
const urls = navUrls;

describe('Test (Full Screen)', function () {
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
            elements.forEach(element => {
                cy.contains(element).should('be.visible');
            });
        });
        cy.wait(2000);
    });

    it('should navigate to the home page when the home button is clicked', function () {
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
        urls.forEach((url) => {
            url().then(() => {
                cy.wait(500);
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

});