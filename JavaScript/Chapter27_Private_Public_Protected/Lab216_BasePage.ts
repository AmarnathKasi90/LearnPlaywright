class BasePage{
    protected baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    public navigate(path: string): void {
        
        console.log("Navigating",this.baseUrl+path)
    }

}

class LoginPage extends BasePage{
    constructor() {
        super("www.staging.com")
    }
   
    login(user: string): void { 
        this.navigate("/login")
        console.log(user,"is in",this.baseUrl)

    }
}

let lp = new LoginPage()
lp.login("Admin")