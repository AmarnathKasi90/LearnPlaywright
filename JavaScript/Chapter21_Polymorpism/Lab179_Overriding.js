class UITest {
    setup() {
        console.log("UI Test")
    }
}

class APITest extends UITest {
    setup() {
        console.log("API Test")
    }
}

let api = new APITest()
api.setup()