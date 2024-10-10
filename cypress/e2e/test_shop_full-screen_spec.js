import UrlVisit from './page_object/url';
import MyExeption from './page_object/exeptions';
import Shop from './page_object/shop_elements';
import { shopProducts } from './page_object/data';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const _shop = new Shop();
const products = shopProducts;


describe('Shop Page telnyx.com (Full Screen)', function () {

    beforeEach(function () {
        _exeption.exeption();
        urlVisit.shopPage();
        _shop.shopSelector().click();
    });

    it('should display visibility of each product', function () {

        products.forEach(product => {
            cy.get(product).should('be.visible');
        });
    });

    it('should filter products by availability', function () {

        // in stock
        _shop.clickAvailabilitySelector('inStock');
        _shop.findVisibleProducts().then(($filteredLi) => {
            const inStock = $filteredLi.length;
            cy.log('in Stock:', inStock);
        });

        // reset
        _shop.resetAvailabilityFilters();

        // out of stock
        _shop.clickAvailabilitySelector('outStock');
        _shop.findVisibleProducts().then(($filteredLi) => {
            const outStock = $filteredLi.length;
            cy.log('out Stock:', outStock);
        });

        // reset
        _shop.resetAvailabilityFilters();

        // all availability
        _shop.clickAvailabilitySelector('inStock');
        _shop.clickAvailabilitySelector('outStock');
        _shop.findVisibleProducts().then(($filteredLi) => {
            const allSelected = $filteredLi.length;
            cy.log('all Selected:', allSelected);
        });

        // reset
        _shop.resetAvailabilityFilters();
    });

});