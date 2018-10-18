const assert = require('assert');
const AssertionError = require('assert').AssertionError;
const { Builder } = require('selenium-webdriver');
const FormPage = require('../pages/form_page');
const ConfirmationPage = require('../pages/confirmation_page');

var capabilities = {
    'browserName' : 'chrome',
    'chromeOptions' : {
      'args' : [
          "--disable-plugins"
        , "--headless"
    ]
    }
}

describe('Checkout Formy', () => {
    let driver;
    let formPage;
    let confirmationPage;

    before(async () => {
        driver = await new Builder().withCapabilities(capabilities).build();        
    });

    it('Form', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/form');

            // Using Page Objects
            formPage = new FormPage(driver);
            formPage.submitForm(driver);

            confirmationPage = new ConfirmationPage(driver);
               
            // assertion codes...       
            await confirmationPage.waitForAlertBanner();
            assert.equal('The form was successfully submitted!', await confirmationPage.getAlertBannerText());
                 
        } catch (error) {
            if (error instanceof AssertionError) {
                // Output expected AssertionErrors.
                throw new Error(error);                
            } else {
                // Output unexpected Errors.
                console.log(error);
            }                   
        }                
    });

    after(async () => driver.quit());
})