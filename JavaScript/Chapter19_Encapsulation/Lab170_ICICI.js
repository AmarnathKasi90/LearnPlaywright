class ICICI {
    #balance = 0;


    constructor(balance, user) {
        this.#balance = balance;
        this.user = user

    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isAdmin) {
        if (isAdmin) {
            this.#balance = balance;
        } else {
            console.log("Not Allowed")
        }
    }
}

let c1 = new ICICI(1000, "kasi")
console.log(c1.getBalance());
c1.setBalance(100000, false)
console.log(c1.getBalance());

console.log("---------------")

let c2 = new ICICI(20000, "Amar")
console.log(c2.getBalance())
c2.setBalance(2000000, true)
console.log(c2.getBalance())