class MyExeption {

    exeption() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    };
};

export default MyExeption;