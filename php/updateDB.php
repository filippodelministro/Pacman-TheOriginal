
<?php
    session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";

    global $PacmanDB;
    $userId = $_SESSION["userId"];

if(!empty($_GET)){

    $score = $_GET["score"];
    $ghost = $_GET["ghost"];
    $timer = $_GET["timer"];
    $res = $_GET["res"];

    $query = "INSERT into matches values ($userId, current_date(), current_time(), $score, $ghost, $timer, $res)";
    $PacmanDB->performQuery($query);
}
?> 