interface Calculator {
    add(a: number, b: number): number,
    subtract(a: number, b: number): number,
    multiply: (a: number, b: number) => number
}

let calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b

}

console.log(calc.add(5, 10))
console.log(calc.subtract(5, 10))
console.log(calc.multiply(5, 10))