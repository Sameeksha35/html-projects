function validate() {
    
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phoneno = document.getElementById("phoneno").value.trim();
    let address = document.getElementById("address").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let hindi = document.getElementById("hindi").checked;
    let english = document.getElementById("english").checked;
    let french = document.getElementById("french").checked;
    let password = document.getElementById("password").value.trim();
    let cpass = document.getElementById("cpass").value.trim();
    let emailRg= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let phoneRg = /^\d{10}$/;
    let isvalid = true;

    if (fname == "") {
        document.getElementById("fn").innerHTML = "Please enter First Name.";
        // return false;
        isvalid = false;
    }else{
        document.getElementById("fn").innerHTML = "";
    }
    

    if (lname == "") {
        document.getElementById("ln").innerHTML = "Please enter Last Name.";
        isvalid = false;
    }else{
        document.getElementById("ln").innerHTML = "";
    }
    

    if (email === "") {
        document.getElementById("eml").innerHTML = "Please enter Email.";
        isvalid = false;
    }else if(!emailRg.test(email))
    {
        document.getElementById("eml").innerHTML = "Invalid Email format.";
        isvalid = false;
    }
    else{
        document.getElementById("eml").innerHTML = "";
    }

    if (phoneno === "") {
        document.getElementById("pn").innerHTML = "Please enter Phone Number.";
        isvalid = false;
    } else if (!phoneRg.test(phoneno)) 
    {
        document.getElementById("pn").innerHTML = "Invalid Phone Number format.Please enter a 10-digit number.";
        isvalid = false;
    }
    else{
        document.getElementById("pn").innerHTML = "";
    }

    if (address === "") {
        document.getElementById("add").innerHTML = "Please enter Address.";
        isvalid = false;
    }
    else{
        document.getElementById("add").innerHTML = "";
    }

    if (!gender) {
        document.getElementById("radiob").innerHTML = "Please select Gender.";
        isvalid = false;
    }
    else{
        document.getElementById("radiob").innerHTML = "";
    }

    if (!hindi && !english && !french) {
        document.getElementById("checkb").innerHTML = "Please select at least one Language Known.";
        isvalid = false;
    }
    else{
        document.getElementById("checkb").innerHTML = "";
    }


    if (password === "") {
        document.getElementById("pass").innerHTML = "Please enter Password.";
        isvalid = false;
    } else if (password.length < 6) {
        document.getElementById("pass").innerHTML = "Password must be at least 6 characters long.";
        isvalid = false;
    }else{
        document.getElementById("pass").innerHTML = "";
    }

    if (cpass === "") {
        document.getElementById("cp").innerHTML = "Please enter Confirm Password.";
        isvalid = false;
    } else if (password !== cpass) {
        document.getElementById("cp").innerHTML = "Passwords do not match. Please enter the same password in both fields.";
        isvalid = false;
    }else{
        document.getElementById("cp").innerHTML = "";
    }

    return isvalid;
}

function isEmailValid(email) {
    if (email.indexOf('@') === -1 || email.indexOf('@') !== email.lastIndexOf('@')) {
        return false;
    }

    if (!email.endsWith('@gmail.com')) {
        return false;
    }

    return true;
}

function isPhoneNumberValid(phoneNumber) {
    let trimnumber = phoneNumber.replace(/[^\d]/g, '');
    if (trimnumber.length !== 10 || isNaN(trimNumber)) {
        return false;
    }

    return true;
}



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

var a; 
function togglePasswordVisibility() {
    if(a == 1)
    {
        document.getElementById('password').type = 'password';
        document.getElementById('eyeicon').src = 'images/pass-hide.jpg';
        a = 0;
    }
    else{
        document.getElementById('password').type = 'text';
        document.getElementById('eyeicon').src = 'images/eye.png';
        a = 1;
    }
  }


//eventListener for submitting

document.querySelector('.form-elements').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validate()) {
        alert("Form submitted successfully!");
    }
});
