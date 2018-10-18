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

    it('Dropdown', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/dropdown');

            await driver.sleep(3000); 

            // click on the datepicker field, add date and close the calender
            let dropdownMenu = await driver.findElement(By.id('dropdownMenuButton'));
            dropdownMenu.click();

            // Wait for 3 seconds before clicking on item
            await driver.sleep(3000);    

            let autoCompleteItem = await driver.findElement(By.id('autocomplete'));
            autoCompleteItem.click()

            await driver.sleep(3000); 
               
            // assertion codes...

        } catch (error) {
            console.log(error);            
        }        
    });

    after(async () => driver.quit());
})