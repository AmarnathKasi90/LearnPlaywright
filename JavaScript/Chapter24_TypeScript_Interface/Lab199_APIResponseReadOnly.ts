interface APIResponseRO {
    readonly status: number,
    body: string,
    headers?: string
}

let api3: APIResponseRO = {
    status: 200,
    body: "Hi",
    headers: "Application/Json"
}

let api4: APIResponseRO = {
    status: 201,
    body: "Created Ok"
}