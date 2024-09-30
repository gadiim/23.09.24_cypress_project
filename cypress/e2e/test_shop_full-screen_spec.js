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

    // xit('should display visibility of each product', function () {
    //     _exeption.exeption();
    //     viewPort.fullScreen();
    //     urlVisit.shopPage();
    //     _shop.shopSelector().click();

    //     products.forEach(product => {
    //         cy.get(product).should('be.visible');
    //     });     
    // });

    it('should filter products by availability', function () {
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.shopPage();
        _shop.shopSelector().click();

        _shop.availabilitySelector().click();
        // in stock
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true }); // примуове виконання
        cy.wait(1000);

        products.forEach((product) => {
            cy.get(product).contains('Sold out').should('not.visible')
        });


        // reset
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true });

        // out of stock
        _shop.outStockAvailabilitySelector().should('be.visible').click({ force: true });
        cy.wait(1000);            
        // reset
        _shop.outStockAvailabilitySelector().should('be.visible').click({ force: true });

        //all availability
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true }); // примуове виконання
        _shop.outStockAvailabilitySelector().should('be.visible').click({ force: true });
        cy.wait(1000);
        // reset
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true }); // примуове виконання
        _shop.outStockAvailabilitySelector().should('be.visible').click({ force: true });

    });
});