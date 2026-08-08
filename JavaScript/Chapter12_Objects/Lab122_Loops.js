let obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const user = { name: "kasi", job: "Automation tester" }

for (let key in user) {
    console.log(`${key} : ${user[key]}`)

}

Object.keys(user).forEach(key => {
    console.log(user[key])
})

Object.entries(user).forEach(([key, value]) => {

    console.log(`${key} : ${value}`)
})

