import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
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
});