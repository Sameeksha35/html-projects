function validate()
{
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pass").value;
    username = username.trim();
    password = password.trim();
    if (username === "") {
        alert("Please enter a username.");
        return false; 
    }else if (!isUsernameValid(username)) {
        alert("Username must be between 4 to 8 characters long, contain only alphanumeric characters, and should not start or end with an underscore.");
        return false;
    }

    if (password === "" || password.length < 6) {
        alert("Please enter a password with at least 6 characters.");
        return false;
    }else if (!isPasswordValid(password)) {
        alert("Password must be atleast 6 characters long and contain at least one uppercase letter, one special character, and one number.");
        return false; 
    }

    return true;

    
}

// Function to validate password
function isPasswordValid(password) {
    if (password.length < 6) {
        return false;
    }
    let hasUpperCase = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpperCase = true;
            break;
        }
    }
    if (!hasUpperCase) {
        return false;
    }

    let specialChars = "!@#$%^&*()_+{}[]|;:,.<>?";
    let hasSpecialChar = false;
    for (let i = 0; i < password.length; i++) {
        if (specialChars.includes(password[i])) {
            hasSpecialChar = true;
            break;
        }
    }
    if (!hasSpecialChar) {
        return false;
    }

    
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            hasNumber = true;
            break;
        }
    }
    if (!hasNumber) {
        return false;
    }
   
    return true;
}


function isUsernameValid(username) {

    if (username.length < 4 || username.length > 8) {
        return false;
    }

    
    let alphanumeric = /^[a-zA-Z0-9]+$/;
    if (!alphanumeric.test(username)) {
        return false;
    }

    if (username.startsWith('_') || username.endsWith('_')) {
        return false;
    }

    return true;
}

