
function checkData(){
    let checkUser = false;
    let checkPsw = false;

    username = document.getElementById("RegisterUsername");
    username.setAttribute("class", "");
    if (username.value == "" || username.value == undefined) {
        alert("Username cannot be empty");
        username.setAttribute("class", "error");
    }
    else checkUser = true;

    //get password and confirm
    psw1 = document.getElementById("RegisterPassword");
    psw2 = document.getElementById("RegisterConfirm");
    psw1.setAttribute("class", "");
    psw2.setAttribute("class", "");
    
    //password validation
    let regExp = /^(?=(.*[a-z]))(?=(.*[0-9]))(?=(.*[A-Z]))[a-zA-Z0-9!?\.]{8,}$/gm;
    let v = psw1.value.match(regExp);
    if (psw1.value == "" || psw1.value == undefined) {
        psw1.setAttribute("class", "error");
        alert("Password cannot be empty");
    }
    else if (v == null) {
        psw1.setAttribute("class", "error");
        alert("Password must contain at least 8 characters and both uppercase and lowercase");
    }
    //check password confirmation
    else if (psw1.value != psw2.value) {
        psw2.setAttribute("class", "error");
        alert("Passwords do not match");
    }
    else checkPsw = true;

    if(checkUser && checkPsw) {
        username.setAttribute("class", "valid");
        psw1.setAttribute("class", "valid");
        psw2.setAttribute("class", "valid");
        document.RegisterForm.submit();
    }
}