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
    $totalPoints = getUserTotPoints($userId);
    $ghostKilled = getUserGhostKilled($userId);
    $gamePlayed = getGamePlayed($userId);
    $win = getUserWin($userId);
    $duration = getUserDuration($userId);
    $fastest = getUserMinDuration($userId);

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
                <button class="menu-item" onclick="appear('rankings')">rankings</button> 
                <button class="menu-item" onclick="appear('statistics')">statistics</button> 
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


            <section id="rankings" class="menu-section leaderboard">
                <h4>general ranking</h4>
                <table class='classifica'>
                <?php

                    for ($i = 1; $i <= 7; $i++) {
                        if ($row = mysqli_fetch_assoc($rank)) {
                            $username = $row["username"];
                            $hs = $row["highscore"];
                        } else {
                            $username = '-';
                            $hs = '-';
                        }
                        echo ("<tr class='classifica'>");
                        echo ("<td class='classifica'>" . $i . "</td>");
                        echo ("<td class='classifica'>" . $username . "</td>");
                        echo ("<td class='classifica'>" . $hs . "</td>");
                        echo ("</tr>");
                    }
                    ?>
                </table>
            </section>
            <section id="statistics" class="menu-section leaderboard">
                <h4>your statistics</h4>
                <ul>
                    <li>total points: <?php echo $totalPoints ?> </li>
                    <li>total ghost killed: <?php echo $ghostKilled ?> </li>

                    <li>match played: <?php echo $gamePlayed?> </li>
                    <li>match won: <?php echo $win?> </li>
                    <li>fastest match:<?php 
                        $minutes = floor($fastest / 60); 
                        $seconds = $fastest % 60;
                        echo $minutes . "' " . $seconds . "''";?> 
                    </li>
                </ul>
            </section>
            


            <section class="review-section" id="main-section">
                <h4><?php echo $_SESSION['username']?></h4>
                <ul>
                    <li>highscore: <?php echo $highscore ?> </li>
                    <li>match won: <?php echo $win?> </li>
                    <li>time spent:<?php 
                        $minutes = floor($duration / 60); 
                        $seconds = $duration % 60;
                        echo $minutes . "' " . $seconds . "''";?> 
                    </li>
                </ul>
            </section>
        </main>
        
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         