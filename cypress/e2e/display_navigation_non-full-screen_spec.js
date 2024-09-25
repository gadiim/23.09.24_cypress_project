describe('Check Display of Navigation Panel Elements (non Full Screen)', function () {
    it('should display all navigation elements in non-full screen (1280x800)', function () {
// exeptions
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
// Set the screen resolution to 1280 x 800 px.
        cy.viewport(1920, 1080); 
// Go to https://telnyx.com/.
        cy.visit('https://telnyx.com/');

    });
});