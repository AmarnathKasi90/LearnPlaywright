function OpenBrowser(callback) {
    console.log("opening the browser")
    setTimeout(function () {
        console.log("Browser Opening")
        callback()
    }, 2000)

}

function Loginpage(callback) {
    console.log("Opening Loginpage")
    setTimeout(function () {
        console.log("Loginpage is Loading")
        callback()
    }, 2000)

}

function EnterCredentials(callback) {
    console.log("enter the Credentails")
    setTimeout(function () {
        console.log("Entering the Username and Password")
        callback()
    }, 2000)

}

function ClickOnLogin() {
    console.log("ready to Click on Login button")
    setTimeout(function () {
        console.log("Login button is ready")
        callback()
    }, 2000)

}


    OpenBrowser(function () {
        Loginpage(function () {
            EnterCredentials(function () {
                ClickOnLogin(function () {
                    console.log("Congrats")
                })
            })
        })
    })
