import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import Shop from './page_object/shop_elements';
import { shopProducts } from './page_object/data';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const _header = new Header();
const _shop = new Shop();
const products = shopProducts;



describe('Shop Page (Full Screen)', function () {
    
    it('should display visibility of each product', function () {
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.shopPage();
        _shop.shopSelector().click();

        products.forEach(product => {
                cy.get(product).should('be.visible');
        });
        
    });
});