function makeRetryTracker(max) {
    let attempt = 0;

    function retryTest(test) {
        attempt++;

        if (attempt > max ) {
            return `${test} retry Attempt ${max}  is Exceeded`
        }

        return `Attempt ${attempt} / ${max} for ${test}`
    }
    
    return retryTest
}

let retry = makeRetryTracker(3)
console.log(retry("login"))
console.log(retry("login"))
console.log(retry("login"))
console.log(retry("login"))
console.log(retry("login"))
// console.log(retry.retryTest("login"))