let api = new Promise(function (resolve, reject) {
    reject("error 500")

})

api.then(function (data) {
    console.log("perfect")
}).catch(function (error) {
    console.log('Server Error')
})

