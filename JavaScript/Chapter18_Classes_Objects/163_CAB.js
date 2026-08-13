class Person {
    //Contructor
    constructor(name) {
        this.name = name;
    }

    // Attribute
    salary = 1000;

    display() {
        console.log("Hi", this.name, "Your salary is ", this.salary)
    }
}

let obj_ref = new Person("Kasi");
console.log(obj_ref)
obj_ref.display()