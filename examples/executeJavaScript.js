const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');

var capabilities = {
    'browserName' : 'chrome',
    'chromeOptions' : {
      'args' : ["--disable-plugins", "--headless"]
    }
}

describe('Checkout Formy', () => {
    let driver;

    before(async () => {
        driver = await new Builder().withCapabilities(capabilities).build();        
    });

    it('Execute JavaScript', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/modal');
            
            let modalButton = await driver.findElement(By.id('modal-button'));
            modalButton.click();     

            // Use JavaScript to close the modal
            let closeButton = await driver.findElement(By.id('close-button'));
            driver.executeScript('arguments[0].click()', closeButton);  

            // assertion codes...

        } catch (error) {
            console.log(error);            
        }        
    });

    after(() => driver.quit());
})