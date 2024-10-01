import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import Shop from './page_object/shop_elements';
import { shopProducts } from './page_object/data';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();
const _shop = new Shop();


describe('Shop Page (Full Screen)', function () {
    it('should filter products by availability', function () {

        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.shopPage();
        _shop.shopSelector().click();
        _shop.availabilitySelector().click();
        // in stock
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true }); // примуове виконання
        cy.wait(2000);


        cy.get('#product-grid').find('li').should('be.visible').then(($filteredLi) => {
            const inStock = $filteredLi.length;
            cy.log('in Stock:', inStock);
        });


        // reset
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true }); // примуове виконання

        // out of stock
        _shop.outStockAvailabilitySelector().should('be.visible').click({ force: true });
        cy.wait(2000);


        cy.get('#product-grid').find('li').should('be.visible').then(($filteredLi) => {
            const outStock = $filteredLi.length;
            cy.log('out Stock:', outStock);
        });


        // reset
        _shop.outStockAvailabilitySelector().should('be.visible').click({ force: true });


        //all availability
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true }); // примуове виконання
        _shop.outStockAvailabilitySelector().should('be.visible').click({ force: true });
        cy.wait(2000);


        cy.get('#product-grid').find('li').should('be.visible').then(($filteredLi) => {
            const allSelected = $filteredLi.length;
            cy.log('all Selected:', allSelected);
        });


        // reset
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true }); // примуове виконання
        _shop.outStockAvailabilitySelector().should('be.visible').click({ force: true });

    });
});