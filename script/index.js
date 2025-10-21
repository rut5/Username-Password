/* Write a isValidPassword function  

It accepts 2 arguments: password and username  

Password must:  

- be at least 8 characters  

- cannot contain spaces  

- cannot contain the username  

If all requirements are met, return true,  

otherwise return false  */

function IsValidPassword() {

    let usernameInput = prompt(`Enter username. Must contain atleast 3 characters.`)

    if (usernameInput.length < 3) {
        console.log(`Invalid username`);
    } else {
        console.log(`Valid username`)
    }

    let passwordInput = prompt(`Enter password. Must contain atleast 8 characters and can not contain spaces or your username.`)

    if (passwordInput.length < 8) {
        console.log(`Invalid password`);
    } else if (passwordInput.includes(` `)) {
        console.log(`Invalid password`);
    } else if (passwordInput.includes(usernameInput)) {
        console.log(`Invalid password`);
    } else {
        console.log(`Valid password`)
    }

}

IsValidPassword();