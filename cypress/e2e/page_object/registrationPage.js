class RegistrationPage {
    constructor() {
        this.emailInput = 'input[id="email"]';
        this.firstNameInput = 'input[id="first_name"]';
        this.lastNameInput = 'input[id="last_name"]';
        this.passwordInput = 'input[id="password"]';
        this.termsCheckbox = 'input[id="terms_and_conditions"]';
        this.subscriptionCheckbox = 'input[id="subscription_opt_in"]';
        this.submitButton = 'button[type="submit"]';
        this.successMessage = 'Registration successful!';
        this.errorMessage = 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.';
    }

    fillEmail(email) {
        cy.get(this.emailInput).type(email).should('have.value', email);
    }

    fillFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName).should('have.value', firstName);
    }

    fillLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName).should('have.value', lastName);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password).should('have.value', password);
    }

    checkTerms() {
        cy.get(this.termsCheckbox).click();
    }

    checkSubscription() {
        cy.get(this.subscriptionCheckbox).click();
    }

    submit() {
        cy.get(this.submitButton).contains('SIGN UP').should('be.visible').click();
    }

    checkSuccessMessage() {
        cy.contains(this.successMessage).should('be.visible');
    }

    checkErrorMessage() {
        cy.contains(this.errorMessage).should('be.visible');
    }
}

export default RegistrationPage;
