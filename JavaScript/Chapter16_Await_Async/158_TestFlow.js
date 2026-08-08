async function sayHello() {
    return "Hi, QA"
}

sayHello().then(function (msg) {
    console.log(msg)
})



async function apiTest() {
    let status = await Promise.resolve(200)
    console.log("Status Code :", status)
}

apiTest()

async function testFlow() {
    let msg1 = await Promise.resolve("Browser Opened")
    console.log(msg1)

    let msg2 = await Promise.resolve("Login Clicked")
    console.log(msg2)

    let msg3 = await Promise.resolve("Dashboard Title Visible")
    console.log(msg3)

}

testFlow()