# Using Page Objects

This is an useful technique in Selenium tests that allows functionality to be separated into different classes based on pages or area of functionality in the application. The benefits to this are that it can be easy to organize test code and helps to keep the test class, itself, even more clean and readable.

## Examples

Check __form_clean_up.js__ for this demostration.

In order to submit a form, I created a FormPage class inside pages folder:

```javascript
// pages/form_page.js
// const {By, Key} = require("selenium-webdriver"); // 605K
const { By } = require("selenium-webdriver/lib/by"); // 2K
const { Key } = require("selenium-webdriver/lib/input"); // 42.3K

class FormPage {
    constructor(driver) {
        this.driver = driver;
    }

    async submitForm() {
        await this.driver.findElement(By.id('first-name')).sendKeys('Dale');
        await this.driver.findElement(By.id('last-name')).sendKeys('Nguyen');
        await this.driver.findElement(By.id('job-title')).sendKeys('Application Developer');
        await this.driver.findElement(By.id('radio-button-2')).click();
        await this.driver.findElement(By.id('checkbox-1')).click();
        await this.driver.findElement(By.css("option[value='1']")).click();
        await this.driver.findElement(By.id('datepicker')).sendKeys('11/13/2018', Key.RETURN);
        await this.driver.findElement(By.css('.btn.btn-lg.btn-primary')).click();
    }
}

module.exports = FormPage;
```

Then inside the test case, I will import the FormPage class.

```sh
// examples/form_clean_up.js

// Using Page Objects
const FormPage = require('../pages/form_page');

let formPage = new FormPage(driver);
formPage.submitForm(driver);
```
