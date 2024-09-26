class UrlVisit {

    mainPage() {
        return cy.visit('https://telnyx.com/')
    };

    baseProductsPage() {
        return 'https://telnyx.com/products/';
    };

    basePricingPage() {
        return 'https://telnyx.com/pricing/';
    };

    baseSolutionsPage() {
        return 'https://telnyx.com/solutions/';
    };

    baseWhyTelnyxPage() {
        return 'https://telnyx.com/why-telnyx/';
    };

    baseResourcesPage() {
        return 'https://telnyx.com/resources/';
    };
    
    productsPage() {
        return cy.visit(this.baseProductsPage())
    };

    solutionsPage() {
        return cy.visit(this.baseSolutionsPage())
    };

    pricingPage() {
        return cy.visit(this.basePricingPage())
    };

    whyTelnyxPage() {
        return cy.visit(this.baseWhyTelnyxPage())
    };

    resourcesPage() {
        return cy.visit(this.baseResourcesPage())
    };

    smsApiProductsPage() {
        return cy.visit(this.baseProductsPage() + 'sms-api/');
    };

    iotSimCardProductsPage() {
        return cy.visit(this.baseProductsPage() + 'iot-sim-card/');
    };

    inferenceProductsPage() {
        return cy.visit(this.baseProductsPage() + 'inference/');
    };

    phoneNumbersProductsPage() {
        return cy.visit(this.baseProductsPage() + 'phone-numbers/');
    };

    voiceApiProductsPage() {
        return cy.visit(this.baseProductsPage() + 'voice-api/');
    };

    cloudStorageProductsPage() {
        return cy.visit(this.baseProductsPage() + 'cloud-storage/');
    };

    seeAllProductsProductsPage() {
        return cy.visit(this.baseProductsPage());
    };

    sipTrunksProductsPage() {
        return cy.visit(this.baseProductsPage() + 'sip-trunks/');
    };

    enterpriseIntegrationsMsTeamsProductsPage() {
        return cy.visit(this.baseProductsPage() + 'enterprise-integrations-ms-teams/');
    };

    webrtcProductsPage() {
        return cy.visit(this.baseProductsPage() + 'webrtc/');
    };

};

export default UrlVisit;
