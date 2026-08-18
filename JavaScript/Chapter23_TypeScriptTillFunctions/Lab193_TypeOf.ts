let Unknown: unknown = "Kasi"
if (typeof (Unknown) === "string") {
    console.log("Unknown is considered as String")
}

let Anything: any = "Reddy"
if (typeof (Anything) === "string") {
    console.log("Anything is considered as String")
}

function throwError(message: string): never {
    throw new Error(message)
}

function infiniteLoop(): never {
    while (true) {

    }
}