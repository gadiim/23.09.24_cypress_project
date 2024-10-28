import UrlVisit from './page_object/url';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import RegistrationPage from './page_object/registrationPage';
import {
    navElementsFullScreen,
    navUrls,
    email,
    first_name,
    last_name,
    password
} from './page_object/data';
import { faker } from '@faker-js/faker';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const _header = new Header();
const _registration = new RegistrationPage();

describe('Test Header telnyx.com (Full Screen)', function () {

    it('should display all navigation elements', function () {
        _exeption.exeption();
        urlVisit.mainPage();
        _header.homeSelector().should('be.visible');
        navElementsFullScreen.forEach(element => {
            cy.contains(element).should('be.visible');
        });
    });

    it('should navigate to the home page when the home button is clicked', function () {
        _exeption.exeption();
        urlVisit.mainPage();
        navUrls.forEach((url) => {
            url().then(() => {
                _header.homeSelector().then(($home) => {
                    if ($home.length) {
                        _header.homeSelector().click();
                    }
                });
            });
        });
    });

    it('should failed check sign up registration (not valid data)', function () {
        _exeption.exeption();
        urlVisit.mainPage();
        cy.contains('Sign Up').click();
        _registration.fillEmail(email);
        _registration.fillFirstName(first_name);
        _registration.fillLastName(last_name);
        _registration.fillPassword(password);
        _registration.checkTerms();
        _registration.checkSubscription();
        _registration.submit();
        _registration.checkErrorMessage();
    });

    it('should successfully(??) check sign up registration', function () {
        _exeption.exeption();
        urlVisit.mainPage();
        cy.contains('Sign Up').click();
        _registration.fillEmail(faker.internet.email());
        _registration.fillFirstName(faker.person.firstName());
        _registration.fillLastName(faker.person.lastName());
        _registration.fillPassword('ValidPassword123!');
        _registration.checkTerms();
        _registration.checkSubscription();
        _registration.submit();
        //_registration.successMessage();
    });

});