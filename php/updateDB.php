
<?php
    session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";

    global $PacmanDB;
    $userId = $_SESSION["userId"];

if(!empty($_REQUEST)){

    //todo: need to get all th values, not just the score
    $score = $_REQUEST["score"];
    //   $ghost = $_REQUEST["ghost"];

    $query = "INSERT into matches values ($userId, current_date(), current_time(), $score, 2, 300, 0)";
    $PacmanDB->performQuery($query);
}
?> 