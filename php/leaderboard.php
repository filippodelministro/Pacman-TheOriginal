<!-- leaderboard.php -->
<!-- Filippo Del Ministro, 21.05.23 -->

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
    $stats = getStats();

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
                <button class="menu-item" onclick="appear('user_rank')">statistics</button> 
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
                        <tr>
                            <td class='ranking pos'>#</td>
                            <td class='ranking pos'>user</td>
                            <td class='ranking pos'>score</td>
                        </tr>
                        <?php
                        for ($i = 1; $i <= 10; $i++) {
                            if ($row = mysqli_fetch_assoc($topRank)) {
                                $username = $row["username"];
                                $hs = $row["highscore"];
                            } else {
                                $username = '-';
                                $hs = '-';
                            }
                            echo ("<tr class='ranking ". ($username == $_SESSION["username"] ? "highlight" : "") ." '>");
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
                <h4>statistics</h4>
                <div class='ranking-container'>
                    <table class='ranking'>
                        <tr>
                            <td class='ranking pos'>#</td>
                            <td class='ranking pos'>user</td>
                            <td class='ranking pos'>score/match</td>
                            <td class='ranking pos'>ghostK/match</td>
                            <td class='ranking pos'>win/match</td>
                        </tr>
                        <?php
                        for ($i = 1; $i <= 10; $i++) {
                            if ($row = mysqli_fetch_assoc($stats)) {
                                $username = $row["username"];
                                $avgScore = $row["avgScore"];
                                $avgGhost = $row["avgGhost"];
                                $avgWin = $row["avgWin"];
                            } else {
                                $username = '-';
                                $hs = '-';
                            }
                            echo ("<tr class='ranking ". ($username == $_SESSION["username"] ? "highlight" : "") ." '>");
                            echo ("<td class='ranking pos'>" . $i . ".</td>");
                            echo ("<td class='ranking'>" . $username . "</td>");
                            echo ("<td class='ranking'>" . $avgScore . "</td>");
                            echo ("<td class='ranking'>" . $avgGhost . "</td>");
                            echo ("<td class='ranking'>" . $avgWin . "</td>");
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