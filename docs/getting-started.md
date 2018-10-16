# Getting Started

## Simple Usage

After installation, we can start to import dependencies

```javascript
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout Google.com', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Search on Google', async function() {
        await driver.get('https://google.com');
        await driver.findElement(By.id('lst-ib')).click();
        await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);

        let title = await driver.getTitle();
        assert.equal(title, 'dalenguyen - Google Search');
    });

    after(() => driver && driver.quit());
})
```

## Example Explanation

The requirements packages need to be imported to our test cases. We will use Chrome browser for testing. And the assert built-in module from Node.js for assertion tests.

We also import custom elements from [WebDriver](https://www.npmjs.com/package/selenium-webdriver) such as: Builder, Key, By and until. The Key provides keys in the keyboard like: RETURN, F4, ALT etc. For a full list of WebDriver elements, you can visit [selenium-webdriver docs](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/).

```javascript
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
```

After that, we will write a simple test case for checking Google search page.

First, we need to create an instance of Chrome WebDriver.

```javascript
before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
});
```

Next, we will write steps for our test. For the element ID, you can find it by open the browser inspect feature.

```javascript
describe('Checkout Google.com', function () {
    ...

    it('Search on Google', async function() {
        // Load the page
        await driver.get('https://google.com');
        // Find the search box by id
        await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);

        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, 'dalenguyen - Google Search');
    });

    // close the browser after running tests
    after(() => driver && driver.quit());
})
```

## Running the test

This simple test can be run from the command line.

```sh
yarn run test
```

The below result shows that the test has been successfully completed.

```sh
dnguyen$ yarn run test
yarn run v1.9.4
$ mocha --recursive --timeout 10000 test.js

  Checkout Google.com
    ✓ Search on Google (2058ms)

  1 passing (3s)

✨  Done in 3.79s.
```