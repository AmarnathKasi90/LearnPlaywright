let Config = {}
Config.env = "Staging"
Config.browser = "chrome"
Config.timeout = 3000
console.log(Config.timeout)
Config.timeout = 5000
console.log(Config.timeout)
console.log(Config)
delete Config.timeout
console.log(Config)