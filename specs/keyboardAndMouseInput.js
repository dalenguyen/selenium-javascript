require('chromedriver');
const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');

describe('Checkout Formy', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Keyboard and Mouse Input', async function() {
        await driver.get('http://formy-project.herokuapp.com/keypress');

        let name = await driver.findElement(By.id('name'));
        name.click();
        name.sendKeys('Dale Nguyen');

        let button = await driver.findElement(By.id('button'));
        button.click();  
        
        // assertion codes...
    });

    after(() => driver && driver.quit());
})