let retryCount: number = 0;
retryCount = retryCount + 1
retryCount++
console.log("Before Block", retryCount)
if (retryCount > 0) {
    retryCount++
    console.log("Inside Block", retryCount)

}

console.log("Outside Block", retryCount)