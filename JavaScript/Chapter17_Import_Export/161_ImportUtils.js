import { BASE_URL as utilsUrl, formatTest } from "./Utils.js";
import { BASE_URL as testUrl, formatToUpperCase } from "./TestUtils.js";
import log from "./Logger.js"
import { log2 } from "./Logger.js"

log("Log the Login Page")
log2("Log of Dashboard Page")

console.log(utilsUrl)
console.log(testUrl)

let util = formatTest("Login")
console.log(util)

let testUtil = formatToUpperCase("Dashboard")
console.log(testUtil)


