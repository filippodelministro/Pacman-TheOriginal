<?php
	session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";
    include "./handle_store.php";

    global $PacmanDB;
    $username = $_SESSION['username'];
    $userId = $_SESSION['userId'];

   //get user data: for rewiew box
   $coins = getUserCoins($userId);
   $skins = getUserSkins($userId);
?>

<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" href="./../images/ghost.png"/>
        <link rel="stylesheet" href="./../css/mutual.css"> 
        <link rel="stylesheet" href="./../css/home.css">
        <link rel="stylesheet" href="./../css/store.css">

        <script src="./../js/effects/store.js"></script>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />            
    </head>    
    <body>
        <header>
            <nav>
                <button class="menu-item" onclick="appear('map')">map</button> 
                <button class="menu-item" onclick="appear('ghosts')">ghosts</button> 
                <button class="menu-item" onclick="appear('pacman')">pacman</button> 
            </nav>
        </header>
        <main id="container" class="container">
            <section class="title-section">
                <h2>PACMAN: Store</h2>
                <p>Buy new skin and customize your Pacman!</p>
            </section>
            <a id="back" href="./home.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a>


            <section id="pacman" class="menu-section store">
                <h4>player</h4>
                <p id="pacman">
                    <span class="material-icons key">north</span> :UP <br>
                    <span class="material-icons key">west</span> :LEFT <br>
                    <span class="material-icons key">east</span> :RIGHT <br>
                    <span class="material-icons key">south</span> :DOWN <br>
                    <span class="material-icons key">space_bar</span> :pause/resume <br>
                </p>
            </section>
            <section id="map" class="menu-section store">
                <h4>map</h4>
                <p>Move Pacman and try to eat all the food in the map. <br> Pay attention to the <mark>ghost</mark>! They can also move
                    around the map trying to catch you: if they do, you will lose a life. <br>
                    Eat <b>cherry</b> to make ghosts harmless and eat them to gain extra points! 
                </p>
            </section>
            <section id="ghosts" class="menu-section store">
                <h4>ghosts</h4>
                <p>Move Pacman and try to eat all the food in the map. <br> Pay attention to the <mark>ghost</mark>! They can also move
                    around the map trying to catch you: if they do, you will lose a life. <br>
                    Eat <b>cherry</b> to make ghosts harmless and eat them to gain extra points! 
                </p>
            </section>
            


            <section class="review-section" id="main-section">
                
                <h4><?php echo ($_SESSION["username"]) ?></h4>
                <ul>
                    <li>coins: <?php echo $coins ?></li><hr>
                    <li>pacman: <?php echo $skins['pacman']?> </li>
                    <li>ghosts: <?php echo $skins['ghosts']?> </li>
                    <li>map: <?php echo $skins['map']?> </li>

                </ul>
            </section>
        </main>
        
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         