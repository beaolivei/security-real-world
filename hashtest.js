const bcrypt = require("bcrypt")

const salt = bcrypt.genSaltSync(10)

const password1 = "my super secret secret"
const password2 = "cobeufbe*&ˆ7ˆ%"

const result1 = bcrypt.hashSync(password1, salt)
const result2 = bcrypt.hashSync(password2, salt)
const result3 = bcrypt.hashSync(password1, salt)

console.log('result 1', result1 )
console.log('secult 2', result2)
console.log('secult 3', result3)

const isTheSame = bcrypt.compareSync("my super secret secret", result1)
// should return true

console.log("is it the same", isTheSame)