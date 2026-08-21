function WrapResponse<T>(statusCode: number, data: T): { statusCode: number, data: T } {
    return { statusCode: statusCode, data: data }
}

let userResp = WrapResponse<string>(200, "admin")
console.log(userResp)

let flagResp = WrapResponse<boolean>(200, true)
console.log(flagResp)