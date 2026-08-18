enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Edge = "edge",
    Safari = "webkit"
}

function selectBrowser(browser: Browser) {
    switch (browser) {
        case Browser.Chrome:
            console.log(Browser.Chrome, "is opening")

        case Browser.Firefox:
            console.log(Browser.Firefox, "is opening")

        case Browser.Edge:
            console.log(Browser.Edge, "is opening")
    }
}

selectBrowser(Browser.Chrome)