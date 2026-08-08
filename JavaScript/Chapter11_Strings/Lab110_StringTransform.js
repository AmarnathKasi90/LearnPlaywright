let str = "  Hello World!  "

console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())

console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log(str.replace("Wor", "lio"))
console.log(str.replace("o", "TT"))
console.log(str.replaceAll("o", "YY"))
console.log("----------")
console.log(str.replace(/o/g, "ZZ"))

console.log(str.split(","))
console.log("He,llo,Wor,ld".split(","))
console.log("He,llo,Wor,ld".split(",").join("-"))
console.log("Hello World".split(""))

let parts = [23, 6, 2026]
let date = parts.join("-")
console.log(date)

let c = "Hello".concat(" ", "World","!")

console.log(c)