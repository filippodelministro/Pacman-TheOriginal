//AJAX functions: pass variables to update.php to update DB

function updateMatches(score, ghost, timer, res) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./../php/updateDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("score=" + score + "&ghost=" + ghost + "&timer=" + timer + "&res=" + res);
}


function updateWallet(coins, fun) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./../php/updateDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("coins=" + coins + "&fun=" + fun);
}

function handleSkin(buy, type, skin, coins, price){
    if(buy){
        //if buying new skin, check the wallet and update
        if(+coins >= +price)
            updateWallet(+price, "remove")
        else{
            window.alert("Low budget!");
            return;
        }
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            window.alert("skin update correctly!");
            location.reload();  
        }

    };
    
    xmlhttp.open("POST", "./../php/updateDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("buy=" + buy + "&type=" + type + "&skin=" + skin);
}   