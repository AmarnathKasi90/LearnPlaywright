function logged(OriginalMethod: any, Context: any): any {
    return function (this: any, ...args: any[]): any {
        console.log("Logged ")
        return OriginalMethod.call(this, args)
    }
}

class Greeter {
    @logged
    hello(): string {
        return "Hi"
    }
}

let r = new Greeter().hello()
console.log(r)