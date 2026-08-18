let responseCodes: number[] = [200, 201, 203, 403, 500, 404]

function getFailedCode(responseCodes: number[]): number[] {
    return responseCodes.filter(function (code) {
        return code > 400
    })
}

console.log(getFailedCode(responseCodes))