enum HTTPMethod {
    get = "GET",
    post = "Post",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE"
}

console.log(HTTPMethod.get)

function sendRequest(method: HTTPMethod, endPoint: string): void {
    console.log(method, endPoint, "--> Status Ok")
}

sendRequest(HTTPMethod.get, "/api/users")
sendRequest(HTTPMethod.delete, "/api/users/1")
