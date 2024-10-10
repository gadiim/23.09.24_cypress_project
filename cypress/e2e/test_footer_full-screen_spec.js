import UrlVisit from './page_object/url';
import MyExeption from './page_object/exeptions';
import Footer from './page_object/footer_elements';

const _exeption = new MyExeption();
const urlVisit = new UrlVisit();
const _footer = new Footer();

describe('Test Footer telnyx.com (Full Screen)', function () {

    it('should scroll to the footer and ensure it is visible', function () {
        _exeption.exeption();
        urlVisit.mainPage();
        _footer.scrollToFooter();
        _footer.footerSelector().should('be.visible');
    });

    it('should verify the presence of social media links, click it, and check the URL', function () {
        _exeption.exeption();
        urlVisit.mainPage();
        // Twitter
        _footer.clickTwitter();
        _footer.verifyUrl('x.com');
        cy.go('back');
        // LinkedIn
        _footer.clickLinkedIn();
        _footer.verifyUrl('linkedin.com');
        cy.go('back');
        // Facebook
        _footer.clickFacebook();
        _footer.verifyUrl('facebook.com');
        cy.go('back');
    });
});