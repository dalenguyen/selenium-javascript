// We've loaded all the usual webdriver objects, pasted in our page's URL, and
// set up a page object class and constructor.
const {Browser, By, Key, until} = require("selenium-webdriver");

const url = 'https://crossbrowsertesting.github.io/drag-and-drop.html'

class DragAndDropPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            // If we right-click on the draggable element and choose Inspect,
            // we can see it has an ID of "draggable". We'll set that up as
            // a locator here.
            draggable: By.id('draggable'),
            // The droppable element has an ID of "droppable". We'll set up
            // a locator for that as well.
            droppable: By.id('droppable'),
        }
    }

    open() {
        this.driver.get(url);
    }

    // Here's the method that will perform the drag-and-drop. It needs to
    // be asynchronous, of course.
    async dragDrop() {
        // First we find the draggable element, using the locator we defined
        // above. Then we find the droppable element.
        let draggable = await this.driver.findElement(this.locators.draggable);
        let droppable = await this.driver.findElement(this.locators.droppable);
        // To perform the drag-and-drop action, we need to take the driver
        // object, and call the actions() method on it to retrieve an object
        // that lets us perform page actions. To get the action we're going to
        // perform, we call the dragAndDrop() method on the actions object,
        // and pass it the element we're dragging and the element we're dropping
        // onto. Finally, we call perform() on the returned action object.
        // These methods return promises, of course, so we need to use the
        // await keyword to wait for them to resolve
        await this.driver
            .actions({bridge:true}) // Bridge mode for Chrome and Safari
            .dragAndDrop(draggable, droppable)
            .perform();
    }
}

module.exports = DragAndDropPage;