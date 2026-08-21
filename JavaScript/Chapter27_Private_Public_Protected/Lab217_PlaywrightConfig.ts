class PlaywrightConfig {
    readonly baseurl: string
    readonly timeout: number
    readonly retries: number

    constructor(url: string, timeout: number, retries: number) {
        this.baseurl = url
        this.timeout = timeout
        this.retries = retries
    }

    showConfig(): void {
        console.log('url ', this.baseurl)
        console.log('timeout ', this.timeout)
        console.log('retries ', this.retries)
    }

}

let config = new PlaywrightConfig("www.api.dev.com", 5000, 2)
config.showConfig()

