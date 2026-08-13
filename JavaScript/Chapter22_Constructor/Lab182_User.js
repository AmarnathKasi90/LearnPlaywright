class User {
    constructor(name) {
        this.name = name
    }

    display() {
        console.log("Hi your name is", this.name)
    }
}

let u11 = new User("Kasi")
let u12 = new User("Amar")

u11.display()
u12.display()