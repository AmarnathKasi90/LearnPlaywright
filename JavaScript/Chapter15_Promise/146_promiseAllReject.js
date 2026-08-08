let checkAuth = Promise.resolve("Auth Ok")
let checkDB = Promise.reject("DB Down")
let checkCache = Promise.resolve("Cache Ok")

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log(results)
}).catch(function (error) {
    console.log(error)
})