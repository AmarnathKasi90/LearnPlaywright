class apiAuth {
    #Apikey;
    user

    constructor(user, key) {
        this.user = user
        this.#Apikey = key
    }

    getAuthKey(user, key) {
        return "Bearer ", this.#Apikey
    }
}


let token = new apiAuth("Kasi", "secret_abc_123")
console.log(token.getAuthKey());