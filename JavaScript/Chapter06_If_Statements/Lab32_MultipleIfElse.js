let isLoggedIn = true;
let userRole = "Editor";

if (isLoggedIn) {
    if (userRole=="Admin") {
        console.log("User have all the Access");
    }
    else if (userRole == "Editor") {
        console.log("User as Edit Access")
    }
    else if (userRole == "Viewer") {
        console.log("User as only View Access")
    }
    else {
        console.log("User Role is not Defined");
    }
}
else {
    console.log("User need to Login First")
}