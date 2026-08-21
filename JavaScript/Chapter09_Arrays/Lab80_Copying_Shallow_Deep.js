let original = [1, 2, 3, 4]
console.log(original);

let copy = [original, 5, 6]
console.log(copy);

let copy1 = [...original, 5, 6]
console.log(copy1);

console.log(original)

let copy2 = original.slice(1);
console.log(copy2)

let copy3 = Array.from(original);
console.log(copy3)

let copy4 = original.concat(7, 6)
console.log(copy4);

let copy5 = [...original];

copy5.push(99);
console.log(copy5);
console.log(original);


let c = original  // deep
original.push(98)
console.log(original)
console.log(c)
console.log(copy5);