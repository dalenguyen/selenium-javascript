// This code is just like we saw in the previous video: we load all the usual
// modules, as well as our page object class.
// The before function sets up a driver and page object for us, and loads
// the page, and the after function quits the driver.
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const DragAndDropPage = require('../pages/drag_and_drop.js');

suite(function(env) {
    describe('Drag and drop demo', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new DragAndDropPage(driver);
            await page.open();
        });

        // We want to write a test that confirms that dragging draggable element
        // updates the droppable element's status text.
        it('Updates status text', async function() {
            // We'll set up a method on the page object that performs the
            // drag and drop for us. Here we call that method, and wait for it
            // to complete.
            await page.dragDrop();
            // Now we need to find the droppable element. We'll use a locator
            // that we'll define in the page object.
            let droppable = await driver.findElement(page.locators.droppable);
            // We wait for the text of the droppable element to be retrieved,
            // and store the result.
            var text = await droppable.getText();
            // And finally, we assert that text includes the word "Dropped".
            assert(text.includes("Dropped"));
        });

        after(async function() {
            driver.quit();
        });
    });
});