function OpenBrowser() {
    console.log("Browser is opening")
    return new Promise(function (resolve) {
        resolve("Browser is opened")
    })
}
function LoginPage() {
    console.log("Login Page is opening")
    return new Promise(function (resolve) {
        resolve("Login Page is opened")
    })
}

// OpenBrowser(function () {
//     LoginPage(function () {
//         console.log("done")
//     })
// })


OpenBrowser().then(function (data) {
    console.log("OpenBrowser is completed")
    return LoginPage()
}).then(function (data) {
    console.log("ok")
})
    .catch(function (Error) {
        console.log("error at OpenBrowser")
    }).finally(function (Done) {
        console.log("congrats")
    })