interface TestStatus {
    id: number,
    name: string,
    status: string,
    duration: number
}

let Test1: TestStatus = {
    id: 123,
    name: "LoginPage",
    status: "Passed",
    duration: 300
}


console.log("TC_ " + Test1.id + " for " + Test1.name + " as " + Test1.status + " with " + Test1.duration)


let test2: TestStatus = {
    id: 234,
    name: "Dashboard Page",
    status: "failed",
    duration: 4000
}

console.log(`TC_${test2.id} of ${test2.name} with ${test2.status} in ${test2.duration}ms`)