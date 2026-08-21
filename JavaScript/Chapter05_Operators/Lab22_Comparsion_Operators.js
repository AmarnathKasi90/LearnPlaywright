let a = 5;
let b = 6;
let c = 5;
console.log(a);
console.log(b);

console.log(`\n${a} < ${b}`, a < b);
console.log(`${a} > ${b}`, a > b);

console.log(`\n${a} < ${c}`, a < c);
console.log(`${a} > ${c}`, a > c);

console.log(`\n${a} >= ${c}`, a >= c);
console.log(`${a} <= ${c}`, a <= c);
console.log(`${a} == ${c}`, a == c);
console.log(`${a} != ${c}`, a != c);

console.log(`\n${a} != ${b}`, a != b);
console.log(`!(${a} != ${b})`, !(a != b));

console.log(`\n ${a} !== ${b}`, a !== b);
console.log(`!(${a} !== ${b})`, !(a !== b));
// console.log(`!(${a} !=== ${b})`, !(a !=== b)); // Doesn't Exist