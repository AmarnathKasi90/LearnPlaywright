function runTest(name, status, duration) {
    return `${name} test as ${status} in ${duration}ms`
}

console.log(runTest("LoginPage", "Passed", 320));