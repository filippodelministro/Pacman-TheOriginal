
function validateRegisterForm(){
    var username = document.forms["registerForm"]["username"].value;
    // var email = document.forms["registerForm"]["email"].value;
    // var telefono = document.forms["registerForm"]["telefono"].value;
    // var password = document.forms["registerForm"]["password"].value;
    var confirmPassword = document.forms["registerForm"]["confirmPassword"].value;

    //RegExp
    var patternUsername = /^[A-Za-z0-9 ]+$/;    //no carattere speciali
    // var patternEmail = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/; //RegExp COPIATA
    // var patternTelefono = /^\d+$/;              //solo numeri
    var patternPassword = /^[A-Za-z0-9 ]+$/;    //almeno una carattere speciale

    //username check
    if (/\s/.test(username)) {
        window.alert("L'username non può contenere spazi");
        return false;
    }

    if(username.charAt(0) >= 0 || username.charAt(0) <= 9){
        window.alert("L'username non può iniziare con un numero");
        return false;
    }
    if(username.length < 3){
        window.alert("L'username deve avere almeno 3 caratteri");
        return false;
    }
    
    if(!patternUsername.test(username)){
        window.alert("L'username non deve contenere caratteri speciali");
        return false;
    }
    
    //email check
    // if (!patternEmail.test(email)) {
    //     window.alert("Indirizzo email non valido");
    //     return false;
    // }

    // //telefono check
    // if (!patternTelefono.test(telefono) || telefono.length != 10 ) {
    //     window.alert("Numero di telefono non valido");
    //     return false;
    // }

    //password check    
    if (/\s/.test(password)) {
        window.alert("La password non può contenere spazi");
        return false;
    }

    if(password.length < 8){
        window.alert("La password deve avere almeno 8 caratteri");
        return false;
    }
    
    if(patternPassword.test(password)){
        window.alert("La password deve contenere almeno un carattere speciale");
        return false;
    }  
    
    if(password != confirmPassword ){
        window.alert("Le password non corrispondono");
        return false;
    }
    return true;
}