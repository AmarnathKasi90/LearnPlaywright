let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("vwo"))
console.log(url.includes("retry"))

console.log(url.startsWith("https://"))
console.log(url.endsWith("=true"))

console.log(url.indexOf('o'))
console.log(url.lastIndexOf('o'))

console.log(url.search(/vwo/))
