let firstName = "Kasi";
let fullName = `${firstName} Reddy`
console.log(fullName);

let env = "Staging";
env = "Prod";
let userId = 1234;

let api_url = `https://api.${env}.vwo.com/users/${userId}`;
console.log(api_url);

//PlayWright
let rowID = 3;
let columnName = "emailID";
console.log(`await page.locator([data-row=${rowID}] [data-column = ${columnName}])`);

//logs
let testcase = "Login-Test";
let status = "Failed";
let duration = 2.34;
console.log(`${testcase} is completed in ${duration} with status ${status}`);

const testCase = "checkout_flow";
const time = Date.now();
console.log(`await page.screenshot({screenshots/${testCase}_${time}.png})`);

const name = "Kasi";
const role = "Admin";

const payload = `{
    "Name": ${name};
   "Role" : ${role};
   "timeStamp": ${new Date().toISOString()};
}`;

console.log(payload);