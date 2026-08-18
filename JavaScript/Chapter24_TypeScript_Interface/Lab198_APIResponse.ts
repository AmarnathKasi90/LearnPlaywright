interface APIResponse {
    Body: string
    headers?: string
    ResposeTime?: number
}

let api1: APIResponse = {
    Body: "This is First API Test",
    headers: "contentType : Application/Json"
}

let api2: APIResponse = {
    Body: "This is Second API Test",
    headers: "Application/Json",
    ResposeTime: 4500
}

console.log(`${api1.Body} with ${api1.headers} `)
console.log(`${api2.Body} with ${api2.headers} in ${api2.ResposeTime}`)