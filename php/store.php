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
        <link rel="stylesheet" href="./skins.php">

        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />            
    </head>    
    <body>
        <header>
            <nav>
                <button class="menu-item" onclick="appear('map-section')">map</button> 
                <button class="menu-item" onclick="appear('ghosts-section')">ghosts</button> 
                <button class="menu-item" onclick="appear('pacman-section')">pacman</button> 
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


            <section id="pacman-section" class="menu-section store">
                <h4>pacman</h4>
                <div>
                    <ul>
                        <li>classic: </li><hr>
                        <li>red: </li><hr>
                        <li>green: </li><hr>
                        <li>fuscia: </li><hr>
                        <li>white: </li><hr>
                    </ul>
                </div>
            </section>
            <section id="map-section" class="menu-section store">
                <h4>pacman</h4>
                <div>
                    <ul>
                        <li>classic: </li><hr>
                        <li>desert: </li><hr>
                        <li>artic: </li><hr>
                        <li>Mars: </li><hr>
                        <li>black&white: </li><hr>
                        <li>lollipop: </li><hr>
                    </ul>
                </div>
            </section>
            <section id="ghosts-section" class="menu-section store">
                <h4>pacman</h4>
                <div>
                    <ul>
                        <li>classic: </li><hr>
                        <li>black&white: </li><hr>
                        <li>aiens: </li><hr>
                        <li>vintage: </li><hr>
                        <li>daltonic: </li><hr>
                    </ul>
                </div>
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