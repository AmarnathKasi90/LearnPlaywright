class BaseTest {
    verify() {
        console.log("Base Test")
    }
}

class UnitTest extends BaseTest {
    verify() {
        console.log("Unit Test")
    }
}

class ApiTest extends BaseTest {
    verify() {
        console.log("API Test")
    }
}

class E2ETest extends BaseTest {
    verify() {
        console.log("E2E Test")
    }
}

let tests = [new UnitTest(), new ApiTest(), new E2ETest()]

tests.forEach(function (page) {
    page.verify()
    console.log("------------")
})