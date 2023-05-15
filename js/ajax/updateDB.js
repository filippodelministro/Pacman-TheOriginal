//AJAX functions: pass variables to update.php to update DB

function updateMatches(score, ghost, timer, res) {
    var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200)
    //         console.log(this.responseText)
    // };
    
    xmlhttp.open("POST", "./../php/updateDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("score=" + score + "&ghost=" + ghost + "&timer=" + timer + "&res=" + res);
}


function updateWallet(coins, fun) {
    var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200)
    //         console.log(this.responseText)
    // };
    
    xmlhttp.open("POST", "./../php/updateDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("coins=" + coins + "&fun=" + fun);
}

function selectSkin(type, skin){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            //todo: try to remove reload
            window.alert("skin update correctly!");
            location.reload();  
            // updatePacmanSkin(skin);
        }

    };
    
    xmlhttp.open("POST", "./../php/updateDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("type=" + type + "&skin=" + skin);
}

//todo: try to remove reload
function updatePacmanSkin(skin) {
    var elem = document.getElementById('pacman-skin');
    if(elem.classList.contains(skin))
        elem.classList.add('select');

}
    