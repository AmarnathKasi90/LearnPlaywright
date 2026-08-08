async function testApi() {

    try {
        let result = await Promise.reject("Error 503")
        console.log("I am Try Block")
    }
    catch {
        console.log("Error 503")
    }
    finally {
        console.log(" I Will Execute - Finally")
    }

}

testApi();