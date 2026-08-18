interface BasePage {
    url: string,
    title: string
}

interface LoginPage extends BasePage {
    usernameSelector: string,
    passwordSelector: string,
    loginButtonSelector: string
}

interface FreeTrailPage extends BasePage {
    usernameSelector: string,
    submitButtonSelector: string
}

let loginPage: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "admin",
    passwordSelector: "Admin123",
    loginButtonSelector: "Clicked"
}

let freeTrailPage: FreeTrailPage = {
    url: "/freeTrail",
    title: "Free Trail Page",
    usernameSelector: "admin",
    submitButtonSelector: "Clicked"
}

console.log("url: ", freeTrailPage.url)
console.log("title: ", freeTrailPage.title)
console.log("usernameSelector: ", freeTrailPage.usernameSelector)