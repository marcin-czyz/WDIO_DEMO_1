const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page')

describe('Login Test Suite', () => {
  // Valid email: 1@2.com
  // Valid password: password
  it('Should display error when password is missing', () => {
    browser.url('');
    LoginPage.emailField.setValue('test@test.com');
    LoginPage.submitButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not Open');
    assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not correct');
    browser.acceptAlert();
    assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

    
  });

  it('Should display error when email is missing', () => {
    browser.url('');
    LoginPage.passwordField.setValue('test');
    LoginPage.submitButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not correct');
    
    browser.acceptAlert();
    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
  });

  it('should display error when email and password are missing', () => {
    browser.url('');
    LoginPage.submitButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not correct');
    
    browser.acceptAlert();
    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
  });

  it('Should display error when email is incorrect', () => {
    browser.url('');
    LoginPage.emailField.setValue('test@test.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text is not correct');
    
    browser.acceptAlert();
    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
  });

  it('Should display error when password is incorrect', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('wrong');
    LoginPage.submitButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text is not correct');
    
    browser.acceptAlert();
    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
  });

  it('Should display error when password case is incorrect', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('PASSWORD');
    LoginPage.submitButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text is not correct');
    
    browser.acceptAlert();
    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
  });

  it('Should login when valid email and password', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    assert.equal(HeaderPage.headerLabel.getText(), 'Heroes', 'Wrong header label text')
    
  });

  it("Should remember login credentials", ()=> {
    browser.url('')
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.rememberLoginCheckbox.click();
    LoginPage.submitButton.click();

    assert.equal(HeaderPage.headerLabel.getText(), 'Heroes', 'Wrong header label text')

    HeaderPage.logoutLink.click();
    assert.equal(LoginPage.headingText.isDisplayed(), true, "it is not login page")
    assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), true, "checkbox is not checked")
    assert.equal(LoginPage.emailField.getValue(), '1@2.com', 'Email is not the same');
    assert.equal(LoginPage.passwordField.getValue().length, 8, "Password is too short");
  
  })
});
