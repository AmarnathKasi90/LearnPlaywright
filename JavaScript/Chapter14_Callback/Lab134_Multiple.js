function greetTester(name, callback) {
    console.log("Hi ", name, "Welcome to testing")
    callback()
}

greetTester("Kasi", function () {
    console.log("Let us start testing")
})

function runTest(testName, callback) {
    let status = "Pass"
    callback(testName, status)
}

runTest("LoginTest", function (name, result) {
    console.log(name, "is", result)

})