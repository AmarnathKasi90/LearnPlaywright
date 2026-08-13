class Animal {
    name
    constructor(name) {
        this.name = name;
        console.log("Animal Constructor is called")
    }

    sound(name) {
        console.log(name, "makes sound")
    }
}

class Dog extends Animal {
    breed;
    constructor(name, breed) {

        super()
        this.name = name;
        this.breed = breed;
        console.log(this.name, " belongs to breed ", this.breed)
    }

    sound() {
        console.log(this.name, "Barks at Strangers")
    }
}

let dog = new Dog("Rex", "Labrador")
dog.sound()