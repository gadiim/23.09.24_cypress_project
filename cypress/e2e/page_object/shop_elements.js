class Shop {

    homeSelector() {
        return cy.get('a[id="HeaderMenu-home"]')
    };

    shopSelector() {
        return cy.get('a[id="HeaderMenu-shop"]')
    };

    accessoriesSelector() {
        return cy.get('a[id="HeaderMenu-accessories"]')
    };

    apparelSelector() {
        return cy.get('a[id="HeaderMenu-apparel"]')
    };

    availabilitySelector() {
        return cy.get('#Details-1-template--14828910739534__product-grid')
    };

    inStockAvailabilitySelector() {
        return cy.get('input[id="Filter-filter.v.availability-1"]')
    };

    outStockAvailabilitySelector() {
        return cy.get('input[id="Filter-filter.v.availability-2"]')
    };

    clickAvailabilitySelector(type) {
        const selector = type === 'inStock' 
            ? this.inStockAvailabilitySelector() 
            : this.outStockAvailabilitySelector();

        selector.should('be.visible').click({ force: true }); // примусове виконання
        cy.wait(2000);
    };

    resetAvailabilityFilters() {
        this.clickAvailabilitySelector('inStock');
        this.clickAvailabilitySelector('outStock');
    };

    findVisibleProducts() {
        return cy.get('#product-grid').find('li').should('be.visible');
    };
};

export default Shop;