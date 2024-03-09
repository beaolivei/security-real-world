# Security and Real World HTTP Servers

## What we will do today: 

* Create a simple login app for the Oscar winners
* Make our app safe using: encryption, hashing and an .env file

### Breaking down app requirements

* authenticate user
INPUT: Email and  
OUTPUT: {
    'error': undefine | string, 
    'user': {}
}
1. grab current user
2. If the user doesn't exist we throw an error "User not found"
3. Otherwise, we check if current user's password matches what we have in the system
4. If it doesn't match we return an error: "User not found"
5. Otherwise, we return no errors and the currentUser

* get user by email: 
INPUT: User email 
OUTPUT: {
    'error': undefine | string, 
    'user': {}
}
1. grab our current user 
2. check if the user exists. If the user doesn't exist we throw an error "User not found"
3. Otherwise, we return no errors and the currentUser

