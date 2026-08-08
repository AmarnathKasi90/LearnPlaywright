function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser Opened")
    })

}

function LoginPage() {
    return new Promise(function (resolve) {
        resolve("Login page is done")
    })
}

function DashboardPage() {
    return new Promise(function (resolve) {
        resolve("Dashboard Page")
    })
}

function Logout() {
    return new Promise(function (resolve) {
        resolve("Logout Done")
    })

}

async function runE2EFlow() {
    let msg1 = await openBrowser();
    console.log("Step1:", msg1)

    let msg2 = await LoginPage()
    console.log("Step2:", msg2)

    let msg3 = await DashboardPage()
    console.log("Step3:", msg3)

    let msg4 = await Logout()
    console.log("Step4:", msg4)
}

runE2EFlow();