let tests = ["login", "search", "logout", "transaction"]

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i])
}

for (let test of tests) {
    console.log(test)
}
console.log("-------------------")
for (let [i, test] of tests.entries()) {
    console.log(test, i)
}

console.log("------forEach-------------")
tests.forEach((test, index) => {
    console.log(`${test} -> ${index} `)
})

console.log("------forIN-------------")
for (let test in tests) {
    console.log(test, " -> ", tests[test])
}
