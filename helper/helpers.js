// authenticate user
const authenticate = (users,email,password) => {
    const currentUser = users[email]

    if(!currentUser){
        return {error: "User does not exist", email: undefined}
    }

    if(currentUser){
        if (currentUser.password === password){
           return {error: undefined, email: email}
        }
    }

    return {error: "Wrong Password", email: undefined}
}

// get user info by email
const getUserByEmail = (users, email) => {
    const currentUser = users[email]

    if(!currentUser){
        return {
            error: "User does not exist",
            user: undefined
        }
    }

    return {
        error: undefined,
        user: currentUser
    }
}
module.exports = { authenticate, getUserByEmail}
