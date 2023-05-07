function updateMatches(score, ghost, timer, res) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            console.log(this.responseText)
    };

    xmlhttp.open("GET", "./../php/updateDB.php?score=" + score + "&ghost=" + ghost + "&timer=" + timer + "&res=" + res, true);
    xmlhttp.send();
}