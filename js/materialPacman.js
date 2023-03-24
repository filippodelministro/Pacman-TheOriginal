var lightmode = true;

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


