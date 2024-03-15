const bcrypt = require("bcrypt")

const salt = bcrypt.genSaltSync(10)

const password1 = "my super secret secret"
const password2 = "dshf8656&ˆ%ˆ"

const result1 = bcrypt.hashSync(password1,salt)
const result2 = bcrypt.hashSync(password2, salt)
const result3 = bcrypt.hashSync(password1,salt)

console.log('result 1', result1)
console.log('result 2', result2)
console.log( 'result 3', result3)