const assert = require('assert');
const AssertionError = require('assert').AssertionError;
const {Builder, By, Key, until} = require('selenium-webdriver');

var capabilities = {
    'browserName' : 'chrome',
    'chromeOptions' : {
      'args' : [
          "--disable-plugins"
        // , "--headless"
    ]
    }
}

describe('Checkout Formy', () => {
    let driver;

    before(async () => {
        driver = await new Builder().withCapabilities(capabilities).build();        
    });

    it('Form', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/form');

            // await driver.sleep(3000); 

            await driver.findElement(By.id('first-name')).sendKeys('Dale');
            await driver.findElement(By.id('last-name')).sendKeys('Nguyen');
            await driver.findElement(By.id('job-title')).sendKeys('Application Developer');
            await driver.findElement(By.id('radio-button-2')).click();
            await driver.findElement(By.id('checkbox-1')).click();
            await driver.findElement(By.css("option[value='1']")).click();
            await driver.findElement(By.id('datepicker')).sendKeys('11/13/2018', Key.RETURN);

            // await driver.sleep(3000); 

            await driver.findElement(By.css('.btn.btn-lg.btn-primary')).click();                        
               
            // assertion codes...       
            let alertText = await driver.wait(until.elementLocated(By.className('alert')), 10000);
            assert.equal('The form was successfully submitted!!!', await alertText.getText());
                 
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