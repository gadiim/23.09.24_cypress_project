import UrlVisit from './page_object/url';
import MyExeption from './page_object/exeptions';
import Shop from './page_object/shop_elements';
import { shopProducts } from './page_object/data';

const exeptionObject = new MyExeption();
const urlVisit = new UrlVisit();
const shopObject = new Shop();
const products = shopProducts;


describe('Shop Page telnyx.com (Full Screen)', function () {

    beforeEach(function () {
        exeptionObject.exeption();
        urlVisit.shopPage();
        shopObject.shopSelector().click();
    });

    it('should display visibility of each product', function () {

        products.forEach(product => {
            cy.get(product).should('be.visible');
        });
    });

    it('should filter products by availability', function () {

        // in stock
        shopObject.clickAvailabilitySelector('inStock');
        shopObject.findVisibleProducts().then(($filteredLi) => {
            const inStock = $filteredLi.length;
            cy.log('in Stock:', inStock);
        });

        // reset
        shopObject.resetAvailabilityFilters();

        // out of stock
        shopObject.clickAvailabilitySelector('outStock');
        shopObject.findVisibleProducts().then(($filteredLi) => {
            const outStock = $filteredLi.length;
            cy.log('out Stock:', outStock);
        });

        // reset
        shopObject.resetAvailabilityFilters();

        // all availability
        shopObject.clickAvailabilitySelector('inStock');
        shopObject.clickAvailabilitySelector('outStock');
        shopObject.findVisibleProducts().then(($filteredLi) => {
            const allSelected = $filteredLi.length;
            cy.log('all Selected:', allSelected);
        });

        // reset
        shopObject.resetAvailabilityFilters();
    });

});