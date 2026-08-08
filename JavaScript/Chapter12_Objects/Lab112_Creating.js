let student1 = { name: "Amar", age: 35, phone: 454424674 }
let student2 = { name: "Kasi", age: 24 }
let student3 = { name: "Reddy" }

let json_Student = { "name": "Amar", "age": 35, "phone": 454424674 }

let a11 = { status: "Pass", Status: "Fail" }
console.log(a11.status)
console.log(a11["Status"])

let a = { status: "PASS" }
console.log(a.status)
console.log(a["status"])
 
let b = a
console.log(b.status)

console.log(b.status === a.status)
b = { status: "FAIL" }
console.log("------")
console.log(b.status === a.status)
console.log(a.status)
console.log(b.status)

