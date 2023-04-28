<?php
	session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";

    global $PacmanDB;
    $username = $_SESSION['username'];
    $userId = $_SESSION['userId']; 

    
    $highscore = getUserHighscore($userId);
    $gamePlayed = getGamePlayed($userId);


    function getGamePlayed($user){
        global $PacmanDB;
        $sql = "SELECT count(*) as numMatches
                FROM matches m
                WHERE m.user = $user;";
        $result = $PacmanDB->performQuery($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
              return $row["numMatches"];
            }
          } else {
            echo "Nessun risultato trovato";
        }
    }

    function getUserHighscore($user){
        global $PacmanDB;
        $sql = "SELECT max(m.score) AS highscore FROM matches m WHERE m.user = $user";
        $result = $PacmanDB->performQuery($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
              return $row["highscore"];
            }
          } else {
            echo "Nessun risultato trovato";
        }
    }
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
                <h4>commands</h4>
                <p id="command">
                    <span class="material-icons key">north</span> :UP <br>
                    <span class="material-icons key">west</span> :LEFT <br>
                    <span class="material-icons key">east</span> :RIGHT <br>
                    <span class="material-icons key">south</span> :DOWN <br>
                    <span class="material-icons key">space_bar</span> :pause/resume <br>
                </p>
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
                    <li>time spent: //todo </li>
                </ul>
            </section>


            <!-- //todo: -->
            <button title="Click here for DarkMode" onclick="changeView()" >
                <span id="darkmode" class="material-icons icons">dark_mode</span>
            </button>
            
        </main>
        
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         