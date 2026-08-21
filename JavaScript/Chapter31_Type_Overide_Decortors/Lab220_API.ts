let rawResponse: unknown = {
    status: 200,
    body: { user: "Admin", role: "Tester" }
}

interface RawResponse {
    status: string,
    body: { user: string, role: string }
}

let rw = rawResponse as RawResponse
console.log(rw.status)