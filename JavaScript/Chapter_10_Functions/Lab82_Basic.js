// If functions are not used logic is repeated

let score1 = 85;
let result1 = score1 >= 75 ? "pass" : "fail"
console.log(result1)

let score2 = 45;
let result2 = score2 >= 75 ? "pass" : "fail"
console.log(result2);

// function getStatus(score) {
//     let result = score >= 75 ? "pass" : "fail"
//     return result
// }

function getStatus(score) {
    return score >= 75 ? "pass" : "fail"
}

console.log(getStatus(45));
console.log(getStatus(80));