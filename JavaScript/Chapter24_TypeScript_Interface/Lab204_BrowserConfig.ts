interface BrowserConfig {
    browser: string,
    headless: boolean,
    retries?: number,
    url: string,
    timeout?: number
}
// let name:string = "Amarnath"

let chromeBrowser: BrowserConfig = {
    browser: "Chrome",
    headless: false,
    url: "www.arkforces.com"
}
console.log(`Browser ${chromeBrowser.browser} is running in headless mode : ${chromeBrowser.headless} for url ${chromeBrowser.url}`)

let fireFox: BrowserConfig = {
    browser: "FireFox",
    headless: true,
    url: "www.google.com",
    retries: 3,
    timeout: 2000
}
console.log("Browser ${firefox.browser} is running in headless mode : ${firefox.headless} for url ${firefox.url}`")
