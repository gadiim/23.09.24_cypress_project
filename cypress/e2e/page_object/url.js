class UrlVisit {

    mainPage() {
        return cy.visit('https://telnyx.com/')
    };

    baseProductsPage() {
        return 'https://telnyx.com/products/';
    }

    productsPage() {
        return cy.visit(this.baseProductsPage())
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
