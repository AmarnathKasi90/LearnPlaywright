class F1 {
    money() {
        console.log("F1")
    }
}

class F2 {
    money() {
        console.log("F2")
    }
}

class son extends F1, F2 {

}

let s = new son();
s.money();