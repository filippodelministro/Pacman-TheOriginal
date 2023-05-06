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
    case 'red': $pacman = "rgb(203, 0,  0);"; break;                //red
    case 'green': $pacman = "rgb(26, 205,  80);"; break;           //green
    case 'fucsia': $pacman = "rgb(255, 0,  239);"; break;           //fuscia
    case 'white': $pacman = "rgb(255, 255,  255);"; break;          //white
    case 'classic':                                                 //classic
    default: $pacman = "rgb(255, 200, 0);"; break;
}

switch ($skins['map']) {
    case 'artic':                                  // artic
        $map = "rgb(160, 210, 230)";
        $wall = "rgb(92, 122, 129)";
        $spawn = "rgb(242, 242, 247)";
        $tunnel = "rgb(169, 183, 198)";
        break;
    case 'desert':                                   // desert
        $map = "rgb(255, 153, 0)";
        $wall = "rgb(255, 51, 0)";
        $spawn = "rgb(200, 130, 0)";
        $tunnel = "rgb(255, 255, 0)";
        break;
    case 'jungle':                                   // jungle
        $map = "rgb(0, 170, 120)";
        $wall = "rgb(0, 255, 30)";
        $spawn = "rgb(10, 70, 30)";
        $tunnel = "rgb(120, 120, 20)";
        break;
    case 'seaside':                                // Mars
        $map = "rgb(51, 153, 255)";
        $wall = "rgb(255, 188, 0)";
        $spawn = "rgb(0, 76, 153)";
        $tunnel = "rgb(255, 128, 0)";
        break;
    case 'black&white':                           //black&white
        $map = "rgb(0, 0, 0)";
        $wall = "rgb(255, 255, 255)";
        $spawn = "rgb(255, 255, 255)";
        $tunnel = "rgb(100, 100, 100)";
        break;
    case 'lollipop':                              //lollipop
        $map = "rgb(255, 153, 153)";
        $wall = "rgb(153, 51, 255)";
        $spawn = "rgb(102, 178, 255)";
        $tunnel = "rgb(255, 255, 102)";
        break;
    case 'classic':                                // classic
    default:
        $map = "rgb(0, 0, 0);";
        $wall = "rgb(0, 0, 105);";
        $spawn = "rgb(0, 0, 67)";
        $tunnel = "white";
        break;
}

switch ($skins['ghosts']) {
    case 'black&white':                             //black&white
        $ghost1 = "rgb(100, 100, 100);";
        $ghost2 = "rgb(150, 150, 150);";
        $ghost3 = "rgb(200, 200, 200);";
        $ghost4 = "rgb(250, 250, 250);";
        break;
    case 'vintage':                                 //vintage
        $ghost1 = "rgb(50, 150, 200)";
        $ghost2 = "rgb(200, 50, 50)";
        $ghost3 = "rgb(200, 200, 50)";
        $ghost4 = "rgb(50, 200, 50)";
        break;
    case 'space':                                   //space
        $ghost1 = "rgb(0, 0, 102)";
        $ghost2 = "rgb(51, 255, 255)";
        $ghost3 = "rgb(255, 51, 153)";
        $ghost4 = "rgb(255, 255, 0)";
        break;
    case 'monocolor':                                   //space
        $ghost1 = "rgb(255, 0, 0)";
        $ghost2 = "rgb(255, 0, 0)";
        $ghost3 = "rgb(255, 0, 0)";
        $ghost4 = "rgb(255, 0, 0)";
        break;
    case 'classic':                                 //classic
    default:
        $ghost1 = "blue;";
        $ghost2 = "red;";
        $ghost3 = "orange;";
        $ghost4 = "pink;";
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


.ghost1{
    background-color: <?=$ghost1?>
}
.ghost2{
    background-color: <?=$ghost2?>
}
.ghost3{
    background-color: <?=$ghost3?>
}
.ghost4{
    background-color: <?=$ghost4?>
}