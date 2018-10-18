const assert = require('assert');
const {Builder, By, Key} = require('selenium-webdriver');

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

    it('Datepicker', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/datepicker');

            // click on the datepicker field, add date and close the calender
            let dateField = await driver.findElement(By.id('datepicker'));
            dateField.sendKeys('16/02/1988', Key.RETURN);

            // Wait for 3 seconds before closing the browser
            await driver.sleep(3000);       

            // assertion codes...

        } catch (error) {
            console.log(error);            
        }        
    });

    after(async () => driver.quit());
})