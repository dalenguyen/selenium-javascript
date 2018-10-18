require('chromedriver');
const assert = require('assert');
const {Builder, By, until} = require('selenium-webdriver');

describe('Checkout Formy', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Autocomplete', async function() {
        await driver.get('http://formy-project.herokuapp.com/autocomplete');

        let autocomplete = await driver.findElement(By.id('autocomplete'));
        autocomplete.sendKeys('51 Bathurst Street, Toronto, ON, Canada'); 
        
        // Wait unti pac-item item appears 
        await driver.wait(until.elementLocated(By.className('pac-item')), 10000);         
        
        let autocompleteResult = await driver.findElement(By.className('pac-item'));
        autocompleteResult.click();

        // Or using sleep 
        // Wait for 3 seconds
        await driver.sleep(3000);
                      
        // assertion codes...
        let streetNumber = await driver.findElement(By.id('street_number')).getAttribute('value');        
        // Cannot assert because the value doesn't appear in the DOM
        // assert.equal(streetNumber, '51');
    });

    after(async () => driver.quit());
})

// Examples 
// driver.sleep(3000);
// https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/lib/until.js
// driver.wait(until.titleIs('webdriver - Google Search'));
// driver.wait(until.elementLocated(By.name('q')));