let browser = "chrome";

switch (browser) {
    case "chrome":
    case "brave":
    case "edge":
    case "Opera": console.log("Chromium Project");
        break;
    case "firefox": console.log("Mozilla Browser"); break;
    case "safari":
    case "webkit": console.log("Apple Browser"); break;
    default: console.log("Verify the browser name Again");

}