const assert = require('assert');
const LoginPage = require ('../pages/login.page');
const HeaderPage = require('../pages/header.page');

function positiveLogin() {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
 }

describe('Header test suite', () => {
    it('Should redirect to new site', () => {
        positiveLogin();

        HeaderPage.linkLink.click();

        assert.equal(browser.getUrl(), 'https://glitchitsystem.com/', 'Wrong page');
        browser.pause(3000);

    });

    it('Should redirect to new site', () => {
        positiveLogin();

        HeaderPage.heroFacts.click();
        HeaderPage.wolverineOption.click();
        browser.pause(1000);
        assert.equal(HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');
        assert.equal(HeaderPage.wolverineModalTitle.getText(), 'Wolverine Fact', 'Wrong Title text')
        assert.equal(HeaderPage.wolverineModalContent.getText(), 'test', 'FAIL Wrong content text')
        browser.pause(3000);

       
    });
});