function updateMatches(score, ghost, timer, res) {
    var xmlHttp = new XMLHttpRequest();
    var query = 'score=' + score + '&ghostKilled=' + ghost + '&timer=' + timer + '&result=' + res;

    xmlHttp.open('POST', './../php/updateDB.php', true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.log("La richiesta AJAX è stata elaborata correttamente.");
        } else {
            console.log("La richiesta AJAX è in corso di elaborazione...");
        }
    };
    console.log("richiesta AJAX: " + query); // Visualizza la stringa di query nella console

    xmlHttp.send(query);
}

function prova(){
    var variable1 = "valore1";
    var variable2 = "valore2";
    var url = "./../php.updateDB.php?variabile1=" + variable1 + "&variable2=" + variable2;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // callback function
        console.log(this.responseText);
    }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

      
}
