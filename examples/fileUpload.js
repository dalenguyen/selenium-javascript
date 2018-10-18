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

    it('File Upload', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/fileupload');

            await driver.sleep(3000); 

            let fileUploadField = await driver.findElement(By.id('file-upload-field'));
            fileUploadField.sendKeys('file-upload.png');

            await driver.sleep(3000); 
               
            // assertion codes...

        } catch (error) {
            console.log(error);            
        }        
    });

    after(async () => driver.quit());
})