function outer() {
    let greet = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(greet);
    }
    return inner;

}


let fn_inner = outer();
fn_inner();


//  inner() not allowed!