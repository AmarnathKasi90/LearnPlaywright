
function MakeRateLimiter(limit) {
    let call = 0;

    function check() {
        call++
        return call <= limit
    }
    return check
}

let limit = MakeRateLimiter(3)

console.log(limit())
console.log(limit())
console.log(limit())
console.log(limit())