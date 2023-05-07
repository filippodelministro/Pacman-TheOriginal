
function validateRegisterForm(){
    var username = document.forms["registerForm"]["username"].value;
    var password = document.forms["registerForm"]["password"].value;
    var confirmPassword = document.forms["registerForm"]["confirmPassword"].value;

    //RegExp
    var patternUsername = /^[A-Za-z0-9 ]+$/;    //no special characters
    var patternPassword = /^[A-Za-z0-9 ]+$/;    //at least one special character

    //todo: change CSS to highlight errors
    //username check
    if (/\s/.test(username)) {
        window.alert("username cannot contain spaces");
        return false;
    }

    if(username.charAt(0) >= 0 || username.charAt(0) <= 9){
        window.alert("username cannot begin with numbers");
        return false;
    }
    
    if(!patternUsername.test(username)){
        window.alert("usernam cannot contain special characters");
        return false;
    }

    if(username.length < 3){
        window.alert("username must be at least 3 characters long");
        return false;
    }
    
    //password check    
    if (/\s/.test(password)) {
        window.alert("password cannot contain spaces");
        return false;
    }

    if(password.length < 8){
        window.alert("password must be at least 8 characters long");
        return false;
    }
    
    if(patternPassword.test(password)){
        window.alert("password have to contain special characters");
        return false;
    }  
    
    if(password != confirmPassword ){
        window.alert("passwords dont match!");
        return false;
    }
    return true;
}