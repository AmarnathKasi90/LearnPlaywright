function apiTest(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 Ok")
        }, 2000)
    })
}

async function runSerial() {
    console.log("Test as Started")
    let start = Date.now()
    let r1 = await apiTest("Login");
    console.log(r1)

    let r2 = await apiTest("Dashboard Page")
    console.log(r2)

    let r3 = await apiTest("Logout")
    console.log(r3)

    console.log("Test Time:", (Date.now() - start), "ms")
}

runSerial()