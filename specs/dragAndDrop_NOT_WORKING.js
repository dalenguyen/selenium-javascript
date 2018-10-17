// https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Actions.html
// Drag and Drop doesn't work yet
// Let's find another method later

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

    it('Drag and Drop', async () => {        
        try {
            await driver.get('http://formy-project.herokuapp.com/dragdrop');

            let image = await driver.findElement(By.id('image'));
            let box = await driver.findElement(By.id('box'));                             

            const actions = driver.actions({bridge: true});
            // const actions = driver.actions();
            console.log(actions.dragAndDrop(image, box));
            
            actions.dragAndDrop(image, box).perform();  
            

            // assertion codes...

        } catch (error) {
            console.log(error);            
        }        
    });

    after(() => driver.quit());
})