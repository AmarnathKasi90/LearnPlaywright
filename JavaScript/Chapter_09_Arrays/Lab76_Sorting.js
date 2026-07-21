let fruits = ["Cherry", "Apple", "Avacado", "Durian"]
console.log(fruits.sort());

let num = [10, 23, 20, 1, 2]
console.log(num.sort());
console.log(num.sort((a, b) => a - b));


console.log(num.sort((a, b) => b - a))