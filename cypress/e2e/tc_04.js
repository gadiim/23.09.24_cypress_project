import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import { email, first_name, last_name, password } from './page_object/data';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();

describe('Test Header (Full Screen)', function () {
    it('should failed check sign up registration (not valid data)', function () {

        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.mainPage();
        cy.contains('Sign Up').click();
        cy.get('input[id="email"]').type(email).should('have.value', email);
        cy.get('input[id="first_name"]').type(first_name).should('have.value', first_name);
        cy.get('input[id="last_name"]').type(last_name).should('have.value', last_name);
        cy.get('input[id="password"]').type(password).should('have.value', password);
        cy.get('input[id="terms_and_conditions"]').click();
        cy.get('input[id="subscription_opt_in"]').click();
        cy.get('button[type="submit"]').contains('SIGN UP').should('be.visible').click();
        cy.contains('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.').should('be.visible');
    });
});
