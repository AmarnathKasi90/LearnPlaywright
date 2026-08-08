let user = {
    firstName: "Kasireddy",
    lastName: " Amarnath",
    get fullname() {
        return this.firstName + this.lastName
    },

    set fullname(value) {
        [this.firstName, this.lastName] = value.split(" ")
    }
}

console.log(user.fullname)

user.fullname = "Abhyant Reddy"
console.log(user.fullname)