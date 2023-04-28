<?php
	session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";
    include "./rank.php";

    global $PacmanDB;
    $username = $_SESSION['username'];
    $userId = $_SESSION['userId']; 

    //get user data: for rewiew box
    $highscore = getUserHighscore($userId);
    $gamePlayed = getGamePlayed($userId);
    $duration = getUserDuration($userId);
    $minutes = floor($duration / 60); 
    $seconds = $duration % 60;

    //get rankings 
    $rank = getRank();

?>

<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" href="./../images/ghost.png"/>
        <link rel="stylesheet" href="./../css/material/materialLight.css">
        <link rel="stylesheet" href="./../css/material/materialMutual.css"> 
        <link rel="stylesheet" href="./../css/home.css">
        <link rel="stylesheet" href="./../css/leaderboard.css">

        
        <!-- //todo: add settings  -->
        <script src="./../js/effects/leaderboard.js"></script>

        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />            
    </head>    
    <body>
        <header>
            <nav>
                <!-- //todo: change -->
                <button class="menu-item" onclick="appear('command')" onclick="showUsers()">rankings</button> 
                <button class="menu-item" onclick="appear('instructions')">your statistics</button> 
            </nav>
        </header>
        <main id="container" class="container">
            <section class="title-section">
                <h2>PACMAN: Leaderboard</h2>
                <p>Check out rankings and statistics</p>
            </section>
            <a id="back" href="./home.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a>


            <section id="command" class="menu-section leaderboard">
                <h4>general ranking</h4>
                <table class='classifica'>
                <?php

                    for ($i = 1; $i <= 7; $i++) {
                        if ($row = mysqli_fetch_assoc($rank)) {
                            $username = $row["username"];
                            $highscore = $row["highscore"];
                        } else {
                            $username = '-';
                            $highscore = '-';
                        }
                        echo ("<tr class='classifica'>");
                        echo ("<td class='classifica'>" . $i . "</td>");
                        echo ("<td class='classifica'>" . $username . "</td>");
                        echo ("<td class='classifica'>" . $highscore . "</td>");
                        echo ("</tr>");
                    }
                    ?>
                </table>
            </section>
            <section id="instructions" class="menu-section leaderboard">
                <h4>instructions</h4>
                <p>Move Pacman and try to eat all the food in the map. <br> Pay attention to the <mark>ghost</mark>! They can also move
                    around the map trying to catch you: if they do, you will lose a life. <br>
                    Eat <b>cherry</b> to make ghosts harmless and eat them to gain extra points! 
                </p>
            </section>
            


            <section class="review-section" id="main-section">
                
                <!-- //todo -->
                <h4><?php echo $username ?></h4>
                <ul>
                    <li>highscore: <?php echo $highscore?></li>
                    <li>game played: <?php echo $gamePlayed?> </li>
                    <li>time spent: <?php echo $minutes . "' " . $seconds . "''"; ?> </li>                </ul>
            </section>
        </main>
        
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         