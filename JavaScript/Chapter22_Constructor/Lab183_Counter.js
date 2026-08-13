class Counter {
    constructor() {
        this.count = 0
    }

    increment() {
        this.count++
        return this
    }

    display() {
        console.log(this.count)
        return this
    }
}


let value = new Counter().increment().increment().increment().display()

console.log(value)