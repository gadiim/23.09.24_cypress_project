import UrlVisit from './page_object/url';
import MyExeption from './page_object/exeptions';
import Header from './page_object/header_elements';
import RegistrationPage from './page_object/registrationPage';
import {
    navElementsFullScreen,
    navUrls,
    email,
    firstName,
    lastName,
    password
} from './page_object/data';
import { faker } from '@faker-js/faker';

const exeptionObject = new MyExeption();
const urlVisit = new UrlVisit();
const headerObject = new Header();
const registrationObject = new RegistrationPage();

describe('Test Header telnyx.com (Full Screen)', function () {

    it('should display all navigation elements', function () {
        exeptionObject.exeption();
        urlVisit.mainPage();
        headerObject.homeSelector().should('be.visible');
        navElementsFullScreen.forEach(element => {
            cy.contains(element).should('be.visible');
        });
    });

    it('should navigate to the home page when the home button is clicked', function () {
        exeptionObject.exeption();
        urlVisit.mainPage();
        navUrls.forEach((url) => {
            url().then(() => {
                headerObject.homeSelector().then(($home) => {
                    if ($home.length) {
                        headerObject.homeSelector().click();
                    }
                });
            });
        });
    });

    it('should failed check sign up registration (not valid data)', function () {
        exeptionObject.exeption();
        urlVisit.mainPage();
        cy.contains('Sign Up').click();
        registrationObject.fillEmail(email);
        registrationObject.fillFirstName(firstName);
        registrationObject.fillLastName(lastName);
        registrationObject.fillPassword(password);
        registrationObject.checkTerms();
        registrationObject.checkSubscription();
        registrationObject.submit();
        registrationObject.checkErrorMessage();
    });

    it('should successfully(??) check sign up registration', function () {
        exeptionObject.exeption();
        urlVisit.mainPage();
        cy.contains('Sign Up').click();
        registrationObject.fillEmail(faker.internet.email());
        registrationObject.fillFirstName(faker.person.firstName());
        registrationObject.fillLastName(faker.person.lastName());
        registrationObject.fillPassword('ValidPassword123!');
        registrationObject.checkTerms();
        registrationObject.checkSubscription();
        registrationObject.submit();
        //registrationObject.successMessage();
    });

});