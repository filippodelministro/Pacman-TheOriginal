var lightmode = true;

function changeView(){
    if(lightmode){
        var link = document.querySelector("link[href='./../css/lightPacman.css']");
        link.href = "./../css/darkPacman.css";
        lightmode = false;
    }
    else{
        var link = document.querySelector("link[href='./../css/darkPacman.css']");
        link.href = "./../css/lightPacman.css";
        lightmode = true;
    }

}


