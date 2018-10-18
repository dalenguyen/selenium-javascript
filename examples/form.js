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

            // await driver.sleep(3000); 
               
            // assertion codes...       
                 
        } catch (error) {
            console.log(error);                   
        }                
    });

    after(async () => driver.quit());
})