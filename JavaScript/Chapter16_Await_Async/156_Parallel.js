function apiTest(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 Ok")
        }, 2000)
    })
}

async function parallel() {
    let [r1, r2, r3] = await Promise.allSettled([
        apiTest("Auth Service"),
        apiTest("DB Service"),
        apiTest("Profile Service")
    ]
    )
    console.log(r1)
    console.log(r2)
    console.log(r3)
}

parallel()


