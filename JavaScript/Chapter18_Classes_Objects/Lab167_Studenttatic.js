class Student {
    constructor(name, age, mobile) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;

    }

    static batch = "Playwright"
    static mentor = "Amarnath"

    display() {
        console.log(`Hi ${this.name} your aged : ${this.age} with Mobile No. ${this.mobile}`)
    }
}

let s1 = new Student("Kasi", 36, 9876598958)
let s2 = new Student("Reddy", 24, 64574442226)

console.log(s1)
console.log(Student.batch)
