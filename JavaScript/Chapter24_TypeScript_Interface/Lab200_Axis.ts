interface axis {
    readonly x: number,
    readonly y: number
}

const angle: axis = {
    x: 20,
    y: 30
}

interface data {
    readonly items: number[]
}

let d1: data = {
    items: [1, 23, 344, 5]
}

console.log(d1.items)