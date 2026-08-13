class BasePage {
    title = "Basepage";

    constructor(title) {
        this.title = title
        console.log("Base page Constructor")
    }

    url() {
        console.log(this.title, "Company Page Title is Verfied")
    }
}

class LoginPage extends BasePage {
    constructor(title) {
        super()
        this.title = title
        console.log("Login Page Constructor")
    }
    url() {
        console.log(this.title, "Login Base is Loaded")
    }
}

class DashBoardPage extends LoginPage {
    constructor(title) {
        super()
        this.title = title
        console.log("DashBoardPage Constructor")
    }
    url() {
        console.log(this.title, "DashBoardPage is Loaded")
    }

}

let db = new DashBoardPage("DBP");
db.url();