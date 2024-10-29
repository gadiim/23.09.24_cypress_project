import UrlVisit from './page_object/url';
import MyExeption from './page_object/exeptions';
import Footer from './page_object/footer_elements';

const exceptionObject = new MyExeption();
const urlVisit = new UrlVisit();
const footerObject = new Footer();

describe('Test Footer telnyx.com (Full Screen)', function () {

    it('should scroll to the footer and ensure it is visible', function () {
        exceptionObject.exeption();
        urlVisit.mainPage();
        footerObject.scrollToFooter();
        footerObject.footerSelector().should('be.visible');
    });

    it('should verify the presence of social media links, click it, and check the URL', function () {
        exceptionObject.exeption();
        urlVisit.mainPage();
        // Twitter
        footerObject.clickTwitter();
        footerObject.verifyUrl('x.com');
        cy.go('back');
        // LinkedIn
        footerObject.clickLinkedIn();
        footerObject.verifyUrl('linkedin.com');
        cy.go('back');
        // Facebook
        footerObject.clickFacebook();
        footerObject.verifyUrl('facebook.com');
        cy.go('back');
    });
});