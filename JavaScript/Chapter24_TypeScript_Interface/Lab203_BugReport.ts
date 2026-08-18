interface BugReport {
    id: number,
    name: string,
    severity: string,
    priority?: string,
    stepsToreproduce: string
}

let bug1: BugReport = {
    id: 1,
    name: "loginPageSubmitButton",
    severity: "High",
    stepsToreproduce: "[Step: step1]"
}

let bug2: BugReport = {
    id: 2,
    name: "Invalidtext",
    severity: "Critical",
    priority: "p2",
    stepsToreproduce: "[Step: step2,step3]"
}

console.log(`Bug_${bug2.id} for ${bug2.name} is ${bug2.severity} with ${bug2.priority} try with ${bug2.stepsToreproduce}`)

console.log("Bug_ " + bug1.id + " for " + bug1.name + " is " + bug1.severity + " try with " + bug1.stepsToreproduce)