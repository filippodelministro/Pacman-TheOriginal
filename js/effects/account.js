
function changeSection(){
  let loginSection = document.getElementById("login");
  let registerSection = document.getElementById("register");

  if(loginSection.classList.contains('appear')){
    registerSection.classList.add('appear');
    loginSection.classList.remove('appear');
  }else{
    registerSection.classList.remove('appear');
    loginSection.classList.add('appear');
  }
}

