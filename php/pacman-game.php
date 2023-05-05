<?php
	session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";
    // include "./updateDB.php";
    include "./handle_leaderboard.php";

    if (!isLogged()){
        header('Location: ./../index.php');
        exit;
    }

    
    global $PacmanDB;
    $username = $_SESSION['username'];
    $userId = $_SESSION['userId']; 
    $highscore = getUserHighscore($userId);


?>


<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" type="image/png" href="./../images/ghost.png"/>
        <script src="./../js/game/const.js"></script>
        <script src="./../js/game/game.js"></script>        
        <script src="./../js/game/map.js"></script>
        <script src="./../js/game/pacman.js"></script>
        <script src="./../js/game/ghosts.js"></script>
        <script src="./../js/game/utility.js"></script>
        <script src="./../js/game/timer.js"></script>
        <script src="./../js/ajax/updateDB.js"></script>

        <link rel="stylesheet" href="./skins.php">

        <link rel="stylesheet" href="./../css/pacman-game.css"> 
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>

        <meta charset="utf-8" />
    </head>

    <body>

        <p id="startinfo">
            <span class="blink">[press any key to start the game]</span>
        </p>

        <div id="playground" class="playground">   
            <div id="map" class="map"></div>

            <div id="gameinfo">
                <h1><?php echo $username ?></h1>
                <h3> highscore:<?php echo $highscore?></h3>
                <p id="score" class="score">score: 0</p>
                <p id="ghostK" class="ghostK">ghost-Kill: 0</p>
                <p id="life" class="life">life: 3</p>
                <p id="timer" class="timer">timer: 0'00''</p>
            </div>
        </div>


        <div id="pause-container" class="menu-container hidden">
            <nav class="menu">
                <a onclick="game.resume()">resume</a> <br>
                <a href="./pacman-game.php">restart</a> <br>
                <a href="./../index.php">exit</a> <br>
            </nav>
            <h3 class="blink">PAUSE</h3>
            <p class="blink">[press ESC to resume]</p>
        </div>
        
        <div id="endGame-container" class="menu-container hidden">
            <nav class="menu">
                <a href="./pacman-game.php">restart</a> <br>
                <a href="./../index.php">exit</a> <br>
            </nav>
        </div>

    </body>

    <?php    
        include "./utility/footer.php";
    ?>
</html>         