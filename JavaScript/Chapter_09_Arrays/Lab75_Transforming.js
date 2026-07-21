let scores = [24, 54, 45, 67, 20, 18]

let grades = scores.map(x => x > 35 ? "pass" : "fail")
console.log(grades);

let passing = scores.filter(x => x > 35)
console.log(passing);

let total = scores.reduce((sum, s) => sum + s, 0)
console.log(total)

let nested = [[1, 2], [3, 5], [5]]
console.log(nested.flat());