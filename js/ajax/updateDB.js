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

function handleSkin(buy, type, skin, coins, price){
    if(buy){
        //if buying new skin, check the wallet and update
        console.log("handleSkin: buy: " + buy + " type: " + type + " skin: " + skin + " coins: " + coins + " price:" + price);
        if(coins >= price){
            console.log("buying");

            updateWallet(price, "remove")
        }
        else{
            window.alert("Not enough coins!");
            return;
        }
    }

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
    xmlhttp.send("buy=" + buy + "&type=" + type + "&skin=" + skin);
}

//todo: try to remove reload
function updatePacmanSkin(skin) {
    var elem = document.getElementById('pacman-skin');
    if(elem.classList.contains(skin))
        elem.classList.add('select');

}
    