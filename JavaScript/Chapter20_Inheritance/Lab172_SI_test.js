class Test {
    constructor(page) {
        this.page = page
        console.log("Test class Constructor")
    }

    openBrowser() {
        console.log("Opening the Browser")
    }

    closeBrowser() {
        console.log("Closing the Browser")
    }
}

class LoginPage extends Test {
    constructor() {
        super()
        console.log("Login Page Constructor")
    }
}

let test = new Test()
test.openBrowser();
test.closeBrowser();
console.log("--------------")


let page = new LoginPage()
page.openBrowser();
page.closeBrowser();