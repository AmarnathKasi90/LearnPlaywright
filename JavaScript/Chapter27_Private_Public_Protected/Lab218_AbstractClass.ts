abstract class BaseTest {
    protected url = "www.baseurl.com"

    constructor(url: string) {
        this.url = url
    }


    abstract setup(): void
    abstract execute(): void
    abstract teardown(): void
    abstract loan(): void
    loan1(): void {
        console.log("HI")
    }


}

class UITest extends BaseTest {

    setup(): void {
        console.log("Test is setup is done")
    }

    execute(): void {
        console.log("Implements actions")
    }
    teardown(): void {
        console.log("Teardown is completed")
    }

    loan(): void {
        console.log('Take the Loan')
    }

}


