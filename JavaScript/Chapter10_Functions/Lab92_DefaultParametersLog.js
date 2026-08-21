
function testRetry(name, returnCount = 3, Duration = 500) {
    return `Retrying for ${name} test as completed ${returnCount} times in ${Duration}ms`
}

console.log(testRetry("loginPage"));
console.log(testRetry("logoutPage", 2));
console.log(testRetry("CheckInPage", 4, 1500));