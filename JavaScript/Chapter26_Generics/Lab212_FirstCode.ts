function getName(name: string): string {
    return "Amit"
}

console.log(getName("Pramod"))

function getFirstResults<T>(results: T[]) {
    return results[0]!
}

let firstcode = getFirstResults<number>([200, 201, 202])
let firstTest = getFirstResults<string>(["Login", "Dashboard", "Admin"])

console.log(firstTest)
console.log(firstcode)