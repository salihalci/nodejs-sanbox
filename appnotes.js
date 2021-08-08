var validator = require('validator')

const myFunc = require("./notes")

val1 = myFunc()

console.log(val1)


console.log(validator.isEmail('s@gmail.com')) 

console.log(validator.isURL('https://io.com'))