// console.log(hi("Kasi"))

var hi = function (msg: string): string {
    return `Hi ${msg}`
}

console.log(hi("Kasi"))

let value = function (a: number, b: number): boolean {
    return a < b;
}
console.log(value(5, 10))

let multiply = (a: number, b: number): number => (a * b)
console.log(multiply(10, 20))

let user:
    { name: string, age: number } = {
    name: "Kasi",
    age: 35
}

console.log(user)