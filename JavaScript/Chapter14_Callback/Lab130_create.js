
function placeOrder(item, callback) {
    console.log(item, " - Order is placing")
    callback()
}

function print() {
    console.log("Your Order is ready")
}

placeOrder('Burger', print)

placeOrder("Pizza", function () {
    console.log("Anonymous Function")
})

placeOrder("Momos", () => {
    console.log("Arrow function is ready")
})