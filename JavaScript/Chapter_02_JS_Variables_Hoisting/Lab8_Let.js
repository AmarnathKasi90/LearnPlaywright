let l = 10;
console.log(l);

// let l = 20; // Global Re-Declaration is not allowed
// console.log(l);

l = 30;
console.log(l);

function letRef() {
    let l = 40;
    console.log(l);

    if (true) {
        let l = 50;
        console.log(l);
    }
    console.log(l);

    // let l = 50;   // Functional Re-Declaration is not allowed

    // console.log(l);
    l = 55;
    console.log(l);
}
console.log(l);

l = 60;

letRef();

console.log(l);
