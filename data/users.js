const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10)

const users = {
    "bradley_cooper@gmail.com": {
        name: "Bradley Cooper", 
        email: "bradley_cooper@gmail.com",
        password: bcrypt.hashSync(process.env.PASSWORD_1, salt),
        category: "best actor"
    },
    "emmastone@gmail.com": {
        name: "Emma Stone", 
        email: "emmastone@gmail.com",
        password: bcrypt.hashSync(process.env.PASSWORD_2, salt),
        category: "best actress"
    }
}

module.exports = { users, salt}