let checkAuth = Promise.resolve("Auth Ok")
let checkDB = Promise.resolve("DB Ok")
let checkCache = Promise.resolve("Check Ok")

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log(results)
})