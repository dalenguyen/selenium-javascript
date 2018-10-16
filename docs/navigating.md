# Navigating

[WebDriver](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html) navigate feature is done by calling **get** method.

```javascript
driver.get('https://google.com');
```

## Interacting with the page

Before working with page, you have to import some elements from selenium-webdriver

```sh
const {Builder, Key, By, until} = require('selenium-webdriver')
```

There are few methods that help to find an element on page. For example, given an element defined as:

```sh
<input type='text' name='username' id='username'>
```

You could find it by using [By](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/by_exports_By.html) class:

```sh
var element = driver.findElement(By.id('username'))
var element = driver.findElement({id: 'username'}))
var element = driver.findElement(By.name('username'))
var element = driver.findElement(By.xpath("//input[@id='username'"))
```

The element will return a promise, so you can either use **await** or **then**

```sh
element.then(el => console.log('Element:', el))
```

If the element cannot be found, a [error.NoSuchElementError](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/error.html) will be returned by the driver.

After you have your elements, you may want to send some text and press the arrow keys by using **Key** class.

```sh
element.sendKeys('hello world', Key.ARROW_DOWN)
```

You can also easily [interact or get the information](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElementPromise.html) of the element after you find it.

```sh
driver.findElement({id: 'submit'}).click();
driver.findElement({id: 'username'}).clear();
```
