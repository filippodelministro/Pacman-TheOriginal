<?php header("Content-type: text/css");
session_start();
require_once "./utility/pacmanDbManager.php";
require_once "./utility/sessionUtil.php";
include "./handle_store.php";

global $PacmanDB;
$username = $_SESSION['username'];
$userId = $_SESSION['userId'];

//get user data: for rewiew box
$skins = getUserSkins($userId);

switch ($skins['pacman']) {
    case 1:
        $pacman = "rgb(255, 200, 0);";      //default
        break;
    case 2:
        $pacman = "rgb(203, 0,  0);";       //dark red
        break;
    case 3:
        $pacman = "rgb(0, 0,  0);";         //black
        break;
    case 4:
        $pacman = "rgb(255, 0,  239);";     //fuscia
        break;
    case 5:
        $pacman = "rgb(255, 255,  255);";   //white
        break;
    default: $pacman = "rgb(255, 200, 0);";
    break;
}

?>

#pacman{
    background-color: <?=$pacman?>
}
