class testCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
        console.log("Hello", this.name)
    }

    display() {
        console.log(`Testcase ${this.name} with status ${this.status} as priority ${this.priority} to close`)
    }
}

function test() {
    return "Failed"
}

async function callNow() {
    let status = await test();
    console.log(status);
}

callNow()

let tc1 = new testCase("LoginPage", "pass", "p1")
tc1.display()

let tc2 = new testCase("DBPage", "fail", "p2")
tc2.display()