import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import Shop from './page_object/shop_elements';


const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const _header = new Header();
const _shop = new Shop();



describe('Test Footer (Full Screen)', function () {
    
    it('should navigate to the shop page when the shop button is clicked', function () {
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.shopPage();
        _shop.shopSelector().click();
        cy.get('#CardLink-template--14828910739534__product-grid-6960027533390').contains("Telnyx Classic Hat").should('be.visible');
        // cy.go('back');
    });
});