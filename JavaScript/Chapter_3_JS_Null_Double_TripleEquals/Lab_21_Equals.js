let a = 5;
let b = 5;
// console.log(5 = 5); //SyntaxError: Invalid left-hand side in assignment
console.log(a = b);
console.log(a == b);
console.log(a === b);

console.log(a == "5");
console.log(a === "5");

console.log(a == 5.0);
console.log(a === 5.0);
console.log(a == 5.0000001);

console.log(`\n\t`, true == 2);
console.log(`\n\t`, true == 1);
console.log(`\n\t`, true == 3);