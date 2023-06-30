<?php
    session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";

if(!empty($_POST)){
    if(isset($_POST["score"]) && isset($_POST["ghost"]) && isset($_POST["timer"]) && isset($_POST["res"])){
        $score = $_POST["score"];
        $ghost = $_POST["ghost"];
        $timer = $_POST["timer"];
        $res = $_POST["res"];

        updateMatches($score, $ghost, $timer, $res);
        return;
    }
    
    if(isset($_POST["coins"]) && isset($_POST["fun"])){
        $coins = $_POST["coins"];
        $fun = $_POST["fun"];

        updateWallet($coins, $fun);
        return;
    }

    if(isset($_POST["buy"]) && isset($_POST["type"]) && isset($_POST["skin"])){
        $buy = $_POST["buy"];       //true or false to handle buy or select
        $type = $_POST["type"];
        $skin = $_POST["skin"];
    
        handleSkin($buy, $type, $skin);
        return;
    }
}

function updateMatches($score, $ghost, $timer, $res){  
    if (isset($_SESSION["userId"])) {  
        $userId = $_SESSION["userId"];

        global $PacmanDB;
        $PacmanDB->openConnection();
        $query = "INSERT into matches values (?, current_date(), current_time(), ?, ?, ?, ?)";
        if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $query)) {
            mysqli_stmt_bind_param($statement, 'iiiii', $userId, $score, $ghost, $timer, $res); 
            mysqli_stmt_execute($statement);
        }

        $PacmanDB->closeConnection();
    }
}

function updateWallet($coins, $fun){
    if (isset($_SESSION["userId"])) {  
        $userId = $_SESSION["userId"];

        //add ore remove coins based on $fun value
        global $PacmanDB;
        $PacmanDB->openConnection();

        if($fun == "add")
            $query = "UPDATE wallet SET coins = coins + ? WHERE user = ?;";
        else if($fun == "remove")
            $query = "UPDATE wallet SET coins = coins - ? WHERE user = ?;";

        if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $query)) {
            mysqli_stmt_bind_param($statement, 'ii', $coins, $userId); 
            mysqli_stmt_execute($statement);
        }
    
        $PacmanDB->closeConnection();
        // $PacmanDB->performQuery($query);
    }
}

function handleSkin($buy, $type, $skin){
    if (isset($_SESSION["userId"])) {  
        $userId = $_SESSION["userId"];

        //handle buy skin and change skin
        if($buy == true)
            buySkin($userId, $type, $skin);

        setSkin($userId, $type, $skin);
    }
}

function buySkin($userId, $type, $skin){
    global $PacmanDB;
    $PacmanDB->openConnection();
    $query = "INSERT INTO unlocked values (?, ?, ?);";
    if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $query)) {
        mysqli_stmt_bind_param($statement, 'iss', $userId, $type, $skin); 
        mysqli_stmt_execute($statement);
    }
    $PacmanDB->closeConnection();
}

function setSkin($userId, $type, $skin){
    global $PacmanDB;
    $PacmanDB->openConnection();

    $query = "";
    switch($type){
        case "pacman": $query = "UPDATE skinsApplied SET pacman = ? WHERE user = ?;"; break;
        case "ghosts": $query = "UPDATE skinsApplied SET ghosts = ? WHERE user = ?;"; break;
        case "map":  $query = "UPDATE skinsApplied SET map = ? WHERE user = ?;"; break;
    }
    if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $query)) {
        mysqli_stmt_bind_param($statement, 'si', $skin, $userId); 
        mysqli_stmt_execute($statement);
    }
    
    $PacmanDB->closeConnection();
}

?> 