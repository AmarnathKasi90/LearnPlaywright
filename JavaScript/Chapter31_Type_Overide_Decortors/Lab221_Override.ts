class BaseTest {
    ready(): void {
        console.log("Browser Opened")
    }

    done(): void {
        console.log("Browser Closed")
    }
}

class UITest extends BaseTest {
    ready(): void {
        console.log("Browser Opened")
        console.log("Browser is Maximized")
    }

}

class APITest extends BaseTest {
    ready(): void {
        console.log("API Test Browser is not Available")
    }
}

let test1 = new UITest()
test1.ready()

let test2 = new APITest()
test2.ready()