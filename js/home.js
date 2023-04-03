
//todo: create a global var for all the pages
// onload=init;

//fix: dont work as a global var
var lightmode;
function init(){
    lightmode = true;
}

function changeView(){
    if(lightmode){
        lightmode = false;
     
        var link = document.querySelector("link[href='./../css/material/materialLight.css']");
        link.href = "./../css/material/materialDark.css";
    }
    else{
        lightmode = true;
     
        var link = document.querySelector("link[href='./../css/material/materialDark.css']");
        link.href = "./../css/material/materialLight.css";
    }
}


function sposta(){
    const div = document.getElementById("main-section");
    const app = document.getElementById("about");
    app.style.display = "block";

    div.style.transform = 'translateX(400px)';
}