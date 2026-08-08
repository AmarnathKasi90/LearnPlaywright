let a = 10
let b = a;
console.log(b === a)
b = 15
console.log(b)
console.log(a)


let obj1 = { v1: 11 }
let obj2 = obj1
console.log(obj2 === obj1)
obj2.v1 = 12;
console.log(obj1.v1)
