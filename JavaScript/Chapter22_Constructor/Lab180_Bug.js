class Bug {
    constructor(title, severity) {
        this.title = title
        this.severity = severity
    }

    display() {
        console.log(`Testcase "${this.title}" as "${this.severity}" severity`)
    }
}

let bug1 = new Bug("Build Issue", "Critical")
let bug2 = new Bug("Typo in Footer", "Low")

bug1.display()
bug2.display()