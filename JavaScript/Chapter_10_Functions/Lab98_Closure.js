function outer() {
    let x = 10;
    var a = 15;
    console.log("Outer Message")

    function inner() {
        let y = 20
        var b = 16
        console.log(a)
        console.log(x)
        console.log("Inner Message")
    }

    return inner();
}


outer()
// console.log(a) //ReferenceError: a is not defined
// console.log(b) // ReferenceError: b is not defined
// console.log(x) //ReferenceError: x is not defined
// console.log(y)    //ReferenceError: y is not defined

