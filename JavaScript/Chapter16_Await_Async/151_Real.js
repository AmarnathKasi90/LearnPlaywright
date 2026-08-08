function OpenBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser is Opened")
    })
}

function LoginPage() {
    return new Promise(function (resolve) {
        resolve("Login Page")
    })
}


async function runTheFlow() {
    let msg1 = await OpenBrowser()
    console.log("msg1", msg1)

    let msg2 = await LoginPage()
    console.log("msg2", msg2)
}

runTheFlow()