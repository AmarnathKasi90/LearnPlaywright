class BasePage {
    verify() {
        console.log("Base Page")
    }
}

class LoginPage extends BasePage {
    login(user) {
        console.log(user, "[Login] page")
    }
}

class AuthPage extends LoginPage {
    Authpage() {
        console.log("[Auth] page")
    }
}

class AdminPage extends AuthPage {

    Adminpage() {
        console.log("[Admin] page")
    }

    manageUsers() {
        console.log("[Manage] users")
    }
}

let admin = new AdminPage()
admin.verify();
admin.login("Admin")
admin.manageUsers()