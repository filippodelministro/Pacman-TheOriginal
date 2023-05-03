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
    case 2: $pacman = "rgb(203, 0,  0);"; break;            //dark red
    case 3: $pacman = "rgb(0, 255,  0);"; break;            //green
    case 4: $pacman = "rgb(255, 0,  239);"; break;          //fuscia
    case 5: $pacman = "rgb(255, 255,  255);"; break;        //white
    case 1:
    default: $pacman = "rgb(255, 200, 0);"; break;
}

switch ($skins['map']) {
    case 2:                                         // desert
        $map = "rgb(154, 130, 92)";
        $wall = "rgb(231, 199, 135)";
        $spawn = "rgb(104, 42, 12)";
        $tunnel = "rgb(243, 238, 224)";
        break;
    case 3:                                         // artic
        $map = "rgb(160, 210, 230)";
        $wall = "rgb(92, 122, 129)";
        $spawn = "rgb(169, 183, 198)";
        $tunnel = "rgb(242, 242, 247)";
        break;
    case 4:                                         // grass
        $map = "rgb(124, 186, 90)";
        $wall = "rgb(34, 139, 34)";
        $spawn = "rgb(60, 179, 113)";
        $tunnel = "rgb(144, 238, 144)";
        break;
    case 5:                                         // Mars
        $map = "rgb(225, 96, 15)";
        $wall = "rgb(152, 51, 0)";
        $spawn = "rgb(250, 128, 114)";
        $tunnel = "rgb(255, 228, 196)";
        break;
    case 1:                                         // default
    default:
        $map = "rgb(0, 0, 0);";
        $wall = "rgb(0, 0, 105);";
        $spawn = "rgb(0, 0, 67)";
        $tunnel = "white";
        break;
}


?>

#pacman{
    background-color: <?=$pacman?>
}

.map{
    background-color: <?=$map?>
}
.wall{
    background-color: <?=$wall?>
}
.spawn{
    background-color: <?=$spawn?>
}
.tunnel{
    background-color: <?=$tunnel?>
}