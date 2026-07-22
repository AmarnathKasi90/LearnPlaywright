//Immediately Invoked Function Expression
// //They don't need to be called.

(function greet() {
    console.log("Hi")
})();


// Exp fn
(function () {
    console.log("Hello")
})();


// arrow fn
(() => {
    console.log("How are you")
})();