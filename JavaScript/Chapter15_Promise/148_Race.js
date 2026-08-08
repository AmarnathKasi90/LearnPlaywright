let slowServer = new Promise(function (resolve) {
    // console.log("slowServer")
    setTimeout(function (resolve) {
        console.log("slowServer - 500ms")
    }, 500)

})

let fastServer = new Promise(function (fastServer) {
    // console.log("Faster Server")
    setTimeout(function (resolve) {
        console.log("fastServer - 100ms")
    }, 100)

})

Promise.race([slowServer, fastServer]).then(function (winner) {
    console.log(winner)
})