const { By } = require("selenium-webdriver/lib/by");
const until = require('selenium-webdriver/lib/until');


class ConfirmationPage {
    constructor(driver) {
        this.driver = driver;
    }

    async waitForAlertBanner() {
        await this.driver.wait(until.elementLocated(By.className('alert')), 10000);
    }
    
    async getAlertBannerText() {
        return await this.driver.findElement(By.className('alert')).getText();
    }
}

module.exports = ConfirmationPage;