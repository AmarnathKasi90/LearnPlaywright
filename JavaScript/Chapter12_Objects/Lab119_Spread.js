let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }

let copy = { ...obj1 }
console.log(copy)

let merge = { ...obj1, ...obj2 }
console.log(merge)