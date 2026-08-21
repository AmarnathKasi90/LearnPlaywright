class APIClient {
    private APIKey: string
    public baseUrl: string
    protected timeout: number

    constructor(baseUrl: string, APIKey: string, timeout: number) {
        this.APIKey = APIKey
        this.baseUrl = baseUrl
        this.timeout = timeout
    }

    private getAuth(): string {
        return "Bearar " + this.APIKey
    }

    public SendRequest(path: string): void {
        console.log("Get", this.baseUrl + path)
        console.log("GETAUTH", this.getAuth())
        console.log("Timeout", this.timeout + "ms")
    }


}
class userApiClient extends APIClient {
    getUsers(): void {
        console.log("Fetching the Users", this.timeout, "ms")
        console.log(this.baseUrl + "/users")
    }
}

let client = new userApiClient("www.api.staging.com", "Secret_ABC_1234", 5000)

client.SendRequest("/login")
client.getUsers()