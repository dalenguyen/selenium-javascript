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

    it('Large page scroll', async () => {        
        await driver.get('http://formy-project.herokuapp.com/scroll')             

        // Find form input at the bottom of the page
        let name = await driver.findElement(By.id('name'));

        // Scroll to the name input field 
        driver.executeScript('arguments[0].scrollIntoView()', name);     
        driver.sleep(300);   
        name.sendKeys('Dale Nguyen');

        // Find date field
        let date = await driver.findElement(By.id('date'));
        date.sendKeys('01/01/2018');      
        
        // assertion codes...
    });

    after(() => driver.quit());
})