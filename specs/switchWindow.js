const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');

var capabilities = {
    'browserName' : 'chrome',
    'chromeOptions' : {
      'args' : ["--disable-plugins"]
    }
}

describe('Checkout Formy', () => {
    let driver;

    before(async () => {
        driver = await new Builder().withCapabilities(capabilities).build();        
    });

    it('Switch Window', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/switch-window');
            
            let newTabButton = await driver.findElement(By.id('new-tab-button'));
            newTabButton.click();

            // Get the original tab
            let originalHandle = await driver.getWindowHandle();            

            await driver.sleep(2000);
            
            // Get and loop through all possible tabs
            // let allHandles = await driver.getAllWindowHandles();            

            // Switch to original tab after 2s
            driver.switchTo().window(originalHandle);                     
            
            // assertion codes...
        } catch (error) {
            console.log(error);            
        }        
    });

    after(() => driver.quit());
})