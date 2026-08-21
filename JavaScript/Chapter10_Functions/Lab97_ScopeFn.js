let env = "Staging"

function test() {
    let timeout = 10;
    console.log(env)           // ✅ can access global
    console.log(timeout)     // ✅ can access local
    function TestOutput() {
        console.log(env)
        console.log(timeout)
    }
}
test()
console.log("--------")
console.log(env)
// console.log(timeout) // ❌ ReferenceError — not accessible outside
// TestOutput()            // ❌ ReferenceError — not accessible outside


