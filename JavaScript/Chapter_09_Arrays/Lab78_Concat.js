let a = [1, 2]
let b = [3, 4]

let c = a.concat(b, [5, 6])
console.log(c)

let d = [...a, ...b]
console.log(d)

let e = c.join(" | ");
console.log(e)

let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);