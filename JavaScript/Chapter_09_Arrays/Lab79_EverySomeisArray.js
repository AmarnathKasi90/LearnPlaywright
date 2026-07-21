let a = Array.isArray([1, 2, 3])
let b = Array.isArray('a')
console.log(a)
console.log(b)


let c = [85, 90, 80].every(s => s >= 75)
let d = [85, 90, 80].every(s => s >= 85)
let e = [85, 90, 80].some(s => s >= 85)
console.log(c)
console.log(d)
console.log(e)