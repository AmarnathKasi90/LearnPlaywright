interface TestHook {
    (testname: string): void
}

let beforeHook: TestHook = function (testname: string): void {
    console.log("[Setting Up the Testcase]", testname)
}

let afterHook: TestHook = function (testname: string): void {
    console.log("[TearDown Initiated]", testname)
}

beforeHook("LoginPage")

interface Testcase {
    id: number,
    name: string,
    status: string,
    responseTime: number
}

let tc1: Testcase = {
    id: 1234,
    name: "LoginPage",
    status: "Pass",
    responseTime: 400
}

console.log(`TC_${tc1.id} of ${tc1.name} as ${tc1.status} in ${tc1.responseTime}ms`)

afterHook("LoginPage")