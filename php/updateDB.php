<?php
    session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";

    global $PacmanDB;
    $userId = $_SESSION["userId"];


if(!empty($_POST)){

    $score = $_POST["score"];
    $ghost = $_POST["ghost"];
    $timer = $_POST["timer"];
    $res = $_POST["res"];

    $query = "INSERT into matches values ($userId, current_date(), current_time(), $score, $ghost, $timer, $res)";
    $PacmanDB->performQuery($query);
}
?> 