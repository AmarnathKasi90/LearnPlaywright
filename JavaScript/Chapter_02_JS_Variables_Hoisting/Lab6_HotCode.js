let a = 1;
let result;

function add(a, b) {
    return a + b;
}

for (let i = 1; i <= 15; i++) {
    result = add(i, i + 2);
}

console.log("After the 15 runs", result);