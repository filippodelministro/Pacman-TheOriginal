
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


function appear(sectionId) {
    var sections = document.querySelectorAll('.menu-section');
        sections.forEach(function(section) {
            section.classList.remove('appear');
    });
  
    var section = document.getElementById(sectionId);
    section.classList.add('appear');

    const div = document.getElementById("main-section");
    div.style.transform = 'translateX(350px)';
}

