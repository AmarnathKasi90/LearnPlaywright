let api = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "userdata" })

})

api.then(function (response) {
    console.log(response)
    console.log(response.status)
    console.log(response.body)
})