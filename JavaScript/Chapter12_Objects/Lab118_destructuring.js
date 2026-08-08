const user = { name: "Kasi", age: 35, city: "Hyd" }
console.log(user)

const { name, age } = user
console.log(name)
console.log(age)

const { name : userName, age : userAge } = user
console.log(userName)
console.log(userAge)


const { country = "USA" } = user
console.log(country)
console.log(user)

