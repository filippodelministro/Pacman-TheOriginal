<?php
    session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";

if(!empty($_POST)){
    $score = $_POST["score"];
    $ghost = $_POST["ghost"];
    $timer = $_POST["timer"];
    $res = $_POST["res"];
    
    $coins = $_POST["coins"];
    $fun = $_POST["fun"];

    updateMatches($score, $ghost, $timer, $res);
    updateWallet($coins, $fun);
}

function updateMatches($score, $ghost, $timer, $res){    
    global $PacmanDB;
    $userId = $_SESSION["userId"];

    $query = "INSERT into matches values ($userId, current_date(), current_time(), $score, $ghost, $timer, $res)";
    $PacmanDB->performQuery($query);
}

function updateWallet($coins, $fun){
    //add ore remove coins based on $fun value

    global $PacmanDB;
    $userId = $_SESSION["userId"];

    if($fun == "add")
        $query = "UPDATE wallet SET coins = coins + $coins WHERE user = $userId;";
    else if($fun == "remove")
        $query = "UPDATE wallet SET coins = coins - $coins WHERE user = $userId;";


    $PacmanDB->performQuery($query);
}



?> 