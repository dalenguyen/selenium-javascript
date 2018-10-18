# Navigating

[WebDriver](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html) navigate feature is done by calling **get** method.

```javascript
driver.get('https://google.com');
```

## Interacting with the page

Before working with page, you have to import some elements from selenium-webdriver

```javascript
const {Builder, Key, By, until} = require('selenium-webdriver')
```

There are few methods that help to find an element on page. For example, given an element defined as:

```javascript
<input type='text' name='username' id='username'>
```

You could find it by using [By](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/by_exports_By.html) class:

```javascript
let element = driver.findElement(By.id('username'))
let element = driver.findElement({id: 'username'}))
let element = driver.findElement(By.name('username'))
let element = driver.findElement(By.xpath("//input[@id='username'"))
```

The element will return a promise, so you can either use **await** or **then**

```javascript
element.then(el => console.log('Element:', el))
```

If the element cannot be found, a [error.NoSuchElementError](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/error.html) will be returned by the driver.

After you have your elements, you may want to send some text and press the arrow keys by using **Key** class.

```javascript
element.sendKeys('hello world', Key.ARROW_DOWN)
```

You can also easily [interact or get the information](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebElementPromise.html) of the element after you find it.

```javascript
driver.findElement({id: 'submit'}).click()
driver.findElement({id: 'username'}).clear()
```

## Tips

Avoid using those locators for finding element:

+ Link text
+ Tag name
+ XPath

Prefer Using

+ ID
+ Class
+ Name
+ CSS selector (*)

CSS Selector are **the most powerful** choice in automation and can be used in conjunction with other types of locators.

```javascript
driver.findElement(By.css("input[name='username']"))
```