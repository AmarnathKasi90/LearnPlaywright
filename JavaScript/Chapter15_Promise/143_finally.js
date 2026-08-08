let api = new Promise(function (resolve, reject) {
    reject("Error 403")
})

api.then(function (pass) {
    console.log("passed")
}).catch(function (error) {
    console.log("got Error")
}).finally(function (willExecute) {
    console.log("I will run always")
})