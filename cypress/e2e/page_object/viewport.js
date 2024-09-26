class ViewPort {

    fullScreen() {
        return cy.viewport(1920, 1080);
    };

    nonFullScreen() {
        return cy.viewport(1280, 800);
    };
    
};

export default ViewPort;