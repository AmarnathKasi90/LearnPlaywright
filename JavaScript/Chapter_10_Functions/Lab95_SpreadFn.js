function sum(a, b, c) {
    return a + b + c
}

let num = [1, 2, 3]
console.log(sum(...num));

function getStatusCode(...codes) {
    return `${codes} are done`
}

statuscodes = [200, 201, 404]
console.log(getStatusCode(statuscodes))

let k = [58, 62, 30].some(s => s >= 70)
console.log(k)


function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];

hasError(...responseCodes); //  true