import UrlVisit from './page_object/url';
import ViewPort from './page_object/viewport';
import MyExeption from './page_object/exeptions';
import { faker } from '@faker-js/faker';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const viewPort = new ViewPort();

describe('Test Header (Full Screen)', function () {
    it('should successfully(??) check sign up registration', function () {
        _exeption.exeption();
        viewPort.fullScreen();
        urlVisit.mainPage();
        cy.contains('Sign Up').click();
        cy.get('input[id="email"]').type(faker.internet.email());
        cy.get('input[id="first_name"]').type(faker.person.firstName());
        cy.get('input[id="last_name"]').type(faker.person.lastName());
        cy.get('input[id="password"]').type('ValidPassword123!');
        cy.get('input[id="terms_and_conditions"]').click();
        cy.get('input[id="subscription_opt_in"]').click();
        cy.get('button[type="submit"]').contains('SIGN UP').should('be.visible').click();
    });
});
