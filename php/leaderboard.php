<?php
	session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";
    include "./handle_leaderboard.php";

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
    $topRank = getToprank();
    $userRank = getUserrank();  //todo: change query

?>

<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" href="./../images/ghost.png"/>
        <link rel="stylesheet" href="./../css/mutual.css"> 
        <link rel="stylesheet" href="./../css/home.css">
        <link rel="stylesheet" href="./../css/leaderboard.css">

        <script src="./../js/effects/leaderboard.js"></script>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />            
    </head>    
    <body>
        <header>
            <nav>
                <button class="menu-item" onclick="appear('user_rank')">your position</button> 
                <button class="menu-item" onclick="appear('top_rank')">top ranking</button> 
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


            <section id="top_rank" class="menu-section leaderboard">
                <h4>top ranking</h4>
                <div class='ranking-container'>
                    <table class='ranking'>
                        <?php
                        for ($i = 1; $i <= 10; $i++) {
                            if ($row = mysqli_fetch_assoc($topRank)) {
                                $username = $row["username"];
                                $hs = $row["highscore"];
                            } else {
                                $username = '-';
                                $hs = '-';
                            }
                            echo ("<tr class='ranking'>");
                            echo ("<td class='ranking pos'>" . $i . ".</td>");
                            echo ("<td class='ranking'>" . $username . "</td>");
                            echo ("<td class='ranking'>" . $hs . "</td>");
                            echo ("</tr>");
                        }
                        ?>
                    </table>
                </div>
            </section>

            <section id="user_rank" class="menu-section leaderboard">
                <h4>your position</h4>
                <div class='ranking-container'>
                    <table class='ranking'>
                        <?php
                        for ($i = 1; $i <= 10; $i++) {
                            if ($row = mysqli_fetch_assoc($userRank)) {
                                $username = $row["username"];
                                $hs = $row["highscore"];
                            } else {
                                $username = '-';
                                $hs = '-';
                            }
                            echo ("<tr class='ranking'>");
                            echo ("<td class='ranking pos'>" . $i . ".</td>");
                            echo ("<td class='ranking'>" . $username . "</td>");
                            echo ("<td class='ranking'>" . $hs . "</td>");
                            echo ("</tr>");
                        }
                        ?>
                    </table>
                </div>
            </section>
            


            <section class="review-section" id="main-section">
                <h4><?php echo $_SESSION['username']?></h4>
                <ul>
                    <li>highscore: <?php echo $highscore ?></li><hr>
                    <li>tot points: <?php echo $totalPoints ?> </li>
                    <li>tot ghost killed: <?php echo $ghostKilled ?> </li><hr>
                    <li>match played: <?php echo $gamePlayed?> </li>
                    <li>match won: <?php echo $win?> </li> <hr>
                    <li>time spent:<?php 
                        $minutes = floor($duration / 60); 
                        $seconds = $duration % 60;
                        echo $minutes . "' " . $seconds . "''";?> 
                    </li>
                    <li>fastest match*:<?php 
                        $minutes = floor($fastest / 60); 
                        $seconds = $fastest % 60;
                        echo $minutes . "' " . $seconds . "''";?> 
                    </li>
                    <span style="font-size: 10px;">*[based on matches won]</span>

                </ul>
            </section>
        </main>
        
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         