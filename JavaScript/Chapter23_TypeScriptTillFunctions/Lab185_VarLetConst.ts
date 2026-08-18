// console.log(varName) // TSError: ⨯ Unable to compile TypeScript:

var varName: string = "Kasi"
console.log("v1", varName)

var varName: string = "Reddy"
console.log("v2", varName)

// console.log(letName) 

let letName: string = "Amar"
console.log("L1", letName)
// let letName:string = "Amarnath" // Redeclaration not Possible for Blocked Scope
letName = "Amarnath"
console.log("L2", letName)


// console.log(pi)

const pi: number = 3.14
console.log(pi)
// pi = 3.15  // Cannot Assign