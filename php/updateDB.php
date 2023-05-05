<?php
	session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";
    // include "./handle_leaderboard.php";

    global $PacmanDB;
    $userId = $_SESSION['userId']; 
    echo $userId;

    echo "Dati inviati tramite la richiesta AJAX:\n";
    var_dump($_POST);
//     if($_POST){
//         $score = $_POST['score'];
//         $ghostKilled = $_POST['ghostKilled'];
//         $timer = $_POST['timer'];
//         $result = $_POST['result'];
//         updateMatches();
//     }
        

// function updateMatches() {
//     global $PacmanDB;
//     $sql = "INSERT INTO matches VALUES ($userId, current_date(), current_time(), $score, $ghostKilled, $timer, $result)";
//     $PacmanDB->performQuery($sql);
// }
?>