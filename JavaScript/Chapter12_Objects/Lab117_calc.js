const user = { name: "Kasi", city: "Hyd" }

let calculator = {
    value : 0,

    sum(n) {
        // this.value = value + n
        this.value += n;
        return this
    },
    sub(n) {
        this.value = this.value - n
        return this
    },
    mul(n) {
        this.value *= n
        return this
    }
}

console.log(calculator.sum(5).sub(10).mul(2))
