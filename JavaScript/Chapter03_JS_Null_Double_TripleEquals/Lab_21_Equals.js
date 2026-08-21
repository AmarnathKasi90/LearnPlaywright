let a = 5;
let b = 5;
let c = 6
let d = 7
// console.log(5 = 5); //SyntaxError: Invalid left-hand side in assignment
console.log(a = b);
console.log(c = d);

console.log(`\n`, a == b);
console.log(a === b);

console.log(`\n\t`, a == "5");
console.log(`\t`, a === "5");

console.log(`\n`, a == 5.0);
console.log(a === 5.0);
console.log(a == 5.0000001);

console.log(`\n\t`, true == 2);
console.log(`\n\t`, true == 1);
console.log(`\n\t`, true == 3);