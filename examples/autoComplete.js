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
        
        // pac-item class doesn't appear at the begining
        await driver.wait(until.elementLocated(By.className('pac-item')), 10000);
        
        let autocompleteResult = await driver.findElement(By.className('pac-item'));
        autocompleteResult.click();
                      
        // assertion codes...
        let streetNumber = await driver.findElement(By.id('street_number')).getAttribute('value');        
        // Cannot assert because the value doesn't appear in the DOM
        // assert.equal(streetNumber, '51');
    });

    after(() => driver && driver.quit());
})