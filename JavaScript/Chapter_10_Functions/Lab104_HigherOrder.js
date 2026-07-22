// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runLogging(testFn,testName) {
    
    console.log(`Starting ${testName}`)

    let result = testFn();

    console.log(`finishing ${testName} ->  ${result} `)

    // return result   // if need to be used later
}

function testPassed() {
    return "pass";
}

function testFailed(){
return "fail"
}

runLogging(testPassed, "LoginPage")
runLogging(testFailed, "DashboardPage")

// let status = runLogging(testPassed, "LoginPage");

// console.log("Final Status:", status);