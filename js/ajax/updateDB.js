// function updateMatches(score, ghost, timer, res) {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200)
//             console.log(this.responseText)
//     };

//     xmlhttp.open("GET", "./../php/updateDB.php?score=" + score + "&ghost=" + ghost + "&timer=" + timer + "&res=" + res, true);
//     xmlhttp.send();
// }

function updateMatches(score, ghost, timer, res) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            console.log(this.responseText)
    };
    
    xmlhttp.open("POST", "./../php/updateDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("score=" + score + "&ghost=" + ghost + "&timer=" + timer + "&res=" + res);
}


function updateWallet(coins) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            console.log(this.responseText)
    };
    
    xmlhttp.open("POST", "./../php/updateDB.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("coins=" + coins);
}

