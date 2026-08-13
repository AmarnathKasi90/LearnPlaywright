class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = false;
        console.log(name, "launched")
    }

    startBrowser() {
        console.log("Starting the Browser")
    }

    closeBrowser() {
        console.log(" Closing the Browser")
    }
}


let chrome = new Browser("Chrome")
let firefox = new Browser("Firefox")
chrome.startBrowser();
console.log(chrome.isOpen)
chrome.closeBrowser();