function BeforeSomething(method: any) {
    return function () {
        console.log("Eat")
        return method()
    }
}

function BeforeAnotherThing(method: any) {
    return function () {
        console.log("Sleep")
        return method()
    }
}

class Dog {
    // @BeforeSomething
    // @BeforeAnotherThing
    bark(): string {
        return "Woof"
    }
}

let d = new Dog().bark()
console.log(d)