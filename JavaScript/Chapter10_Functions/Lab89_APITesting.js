// If statusCode >=200 && statusCode <=300

function getStatus(statusCode) {
    if (statusCode >= 200 && statusCode <= 300)
        return "Valid API"
}

let status_Exp = function (statusCode) {
    if (statusCode >= 200 && statusCode <= 300)
        return "Valid API"
}

let status_ArrowFn = (statusCode) => {
    if (statusCode >= 200 && statusCode <= 300)
        return "Valid API"
}

console.log(status_ArrowFn(200))
console.log(status_Exp(200))
console.log(getStatus(200))