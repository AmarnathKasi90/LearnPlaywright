let user = {
    name: "Kasi",
    sayMyName(lastName) {
        this.name = this.name + lastName
        return this.name
    }
}

console.log(user.sayMyName("reddy"))