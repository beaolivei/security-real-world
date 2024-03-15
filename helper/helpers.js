// authenticate user
// input : email(string), password(strings)
// output: {error: string || undefined , email: string || undefined }

const authenticate = (users, email, password) => {
// check if we have the email key in our database
const currentUser = users[email]

// if the user doesn't exist -> error: "user does not exist" email: undefined
if(!currentUser){
    return {
        error: "User does not exist",
        email: undefined
    }
}

//if the user exists we have 2 options: 
     // check if the password is correct
     // if the password is correct error: undefined, email: string
     // if the password is not correct error: "Incorrect Password" email: undefined
if(currentUser){
    if(currentUser.password === password){
        return {
            error: undefined,
            email: currentUser.email
        }
    }
}

return {
    error: "Incorrect Password", 
    email: undefined
}
}


// get user info by email

//input: email -> string
// outputs: {error: "user cannot be found", userInfo: undefined} || { error: undefined, userInfo: objetc with user information }

const getUserByEmail = (users,email) =>{
    console.log('users', users)
// check if the user exists
const currentUser = users[email]

// if user doesn't exist return error: "user cannot be found" userInfo: undefined
if(!currentUser){
    return {
        error: "user cannot be found",
        userInfo: undefined
    }
}
// if the user exists  return error: undefined, userInfo: userInfo
return {
    error: undefined,
    userInfo: currentUser
}

}

module.exports = { authenticate, getUserByEmail}
