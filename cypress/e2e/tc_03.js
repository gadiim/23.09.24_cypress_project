import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import { navUrls } from './page_object/data';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();

describe('Test Header (Full Screen)', function () {
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
});