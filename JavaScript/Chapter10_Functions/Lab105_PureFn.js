function pureScore(total, persons) {
    let marks = ((total / persons) * 100).toFixed(2)
    return marks
}

function ImpureScore(score) {
    return score >= threshold
}

console.log(pureScore(10, 7))
console.log(pureScore(10, 7))
let threshold = 50
console.log(ImpureScore(65))
 threshold = 100
console.log(ImpureScore(65))