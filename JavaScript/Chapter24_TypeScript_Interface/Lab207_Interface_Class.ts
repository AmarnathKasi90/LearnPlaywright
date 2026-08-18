interface Executable {
    name: string,
    run(): void,
    getStatus(): string
}

class TestCase implements Executable {
    name: string
    constructor(name: string) {
        this.name = name
    }
    run(): void {
        console.log("[Run] The Testcase :", this.name)
    }

    getStatus(): string {
        return "Pass"
    }
}

let tc = new TestCase("Login page Verify")
tc.run()
console.log(tc.getStatus())