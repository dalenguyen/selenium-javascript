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

    it('Radio Button', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/radiobutton');

            let radioButton1 = await driver.findElement(By.id('radio-button-1'));
            radioButton1.click();

            let radioButton2 = await driver.findElement(By.css("input[value='option2'"));
            radioButton2.click();

            let radioButton3 = await driver.findElement(By.xpath('/html/body/div/div[3]/input'));
            radioButton3.click();            

            // assertion codes...

        } catch (error) {
            console.log(error);            
        }        
    });

    after(async () => driver.quit());
})