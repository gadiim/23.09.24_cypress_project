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
};

export default Shop;