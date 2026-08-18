for (let i = 1; i < 5; i++) {
    let count = 1
    if (i > 0) {
        count++
        console.log("In if", count)
    }
    count += i
    console.log("In for", count)
}

// console.log(count) // Out of if Block / for Loop

let count = 165

console.log(count)