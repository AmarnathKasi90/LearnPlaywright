var v = 10;
console.log(v);
var v = 20; // No error, re-declaration is allowed
console.log(v);
v = 30; // Re- Assignment
console.log(v);

function varRef() {
    var v = 40;
    console.log(v);
    if (true) {
        var v = 50;
        console.log(v);
    }
    console.log("B - > ", v);
    v = 70;
    console.log("F - > ", v);
}

console.log("G->", v);

varRef();
// v = 80;

console.log("GF->", v);