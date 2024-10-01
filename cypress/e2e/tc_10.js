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
    it('should add a product to the cart in the Shop section', function () {
        
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.shopPage();
        _shop.shopSelector().click();
        _shop.availabilitySelector().click();
        // in stock
        _shop.inStockAvailabilitySelector().should('be.visible').click({ force: true }); // примуове виконання
        cy.wait(2000);

        
            cy.get('#product-grid').find('li').should('be.visible').then(($filteredLi) => {
                $filteredLi.click();
                cy.contains('Add to cart ').click(); // add to cart
                cy.get('#CartDrawer > div.drawer__inner > div.drawer__header > button').click(); // close cart
                cy.wait(1000);
                cy.go('back');
            });
        


        // const shopProducts = [
        //     '#CardLink-template--14828910739534__product-grid-6960027533390', //contains("Telnyx Classic Hat")
        //     '#CardLink-template--14828910739534__product-grid-7428845666382', //contains("Telnyx International Travel Adapter")
        //     '#CardLink-template--14828910739534__product-grid-7428954161230', //contains("Telnyx Portable Wireless Power Charger")
        //     '#CardLink-template--14828910739534__product-grid-6915266183246', //contains("Telnyx Pullover Hoodie")
        //     '#CardLink-template--14828910739534__product-grid-6738575687758', //contains("Telnyx SIM Card for IoT and M2M (10PK)")
        //     '#CardLink-template--14828910739534__product-grid-6751953256526', //contains("Telnyx SIM Card for IoT and M2M (1PK)")
        //     '#CardLink-template--14828910739534__product-grid-6761603727438', //contains("Telnyx SIM Card for IoT and M2M (3PK)")
        //   ];
        
        //   shopProducts.forEach(product => {
        //     cy.get(product).should('be.visible').click();

        //         cy.contains('Add to cart ').click(); // add to cart
        //         cy.get('#CartDrawer > div.drawer__inner > div.drawer__header > button').click(); // close cart
        //         cy.wait(1000);
        //         cy.go('back');
        // });
    })



    // cy.get('#CardLink-template--14828910739534__product-grid-6960027533390').click();
    // cy.get('button[name="add"]').click(); // add to cart
    // cy.get('#CartDrawer > div.drawer__inner > div.drawer__header > button').click(); // close cart

});