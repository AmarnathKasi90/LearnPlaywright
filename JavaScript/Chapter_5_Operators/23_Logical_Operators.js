// && -> AND Gate
// || -> OR Gate

let a = true;
let b = true;
let c = false;
let d = false;

console.log(a && b); //
console.log(a && c);
console.log(d && c);
console.log(d && b);

console.log(a || b);
console.log(a || c);
console.log(d || c); //
console.log(d || b);

console.log(a);
console.log(!a); // Reverse of a

console.log(d);
console.log(!d);

console.log(!(d || c)); //
