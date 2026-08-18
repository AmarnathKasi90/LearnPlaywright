function MainUrl(baseurl: string, pathurl: string): string {
    return `${baseurl}${pathurl}`
}

console.log(MainUrl("https://app.vwo.com", "?query=123"))

function successCode(code: number): boolean {
    return code >= 200 && code <= 300
}

console.log(successCode(201))

function logTestStep(test: string, status: string): void {
    console.log(`[Step] : ${test} is completed with ${status} status`)
}

logTestStep("LoginPage", "Pass")