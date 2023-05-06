function updateMatches(score, ghost, timer, res) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            console.log(this.responseText)
    };

    
    //todo: need to pass all the values, not just score
    xmlhttp.open("GET", "./../php/updateDB.php?score=" + score, true);
    xmlhttp.send();
}