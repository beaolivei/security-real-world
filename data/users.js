const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10)
const users = {
    "bradley_cooper@gmail.com": {
        name: "Bradley Cooper", 
        email: "bradley_cooper@gmail.com",
        password: bcrypt.hashSync("bradley123", salt),
        category: "best actor"
    },
    "emmastone@gmail.com": {
        name: "Emma Stone", 
        email: bcrypt.hashSync("emmastone@gmail.com", salt),
        password: "emma123",
        category: "best actress"
    }
}

module.exports = {users}
