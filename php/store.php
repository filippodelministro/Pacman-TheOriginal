<!-- store.php -->
<!-- Filippo Del Ministro, 21.05.23 -->


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
   $skinsUsed = getUserSkins($userId);

   //get skins prices
   $pacmanSkins = getPacmanSkins($userId);
   $ghostSkins = getGhostSkins($userId);
   $mapSkins = getMapSkins($userId);
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
        <script src="./../js/ajax/updateDB.js"></script>

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
                        <?php
                            for ($i = 1; $i <= 5; $i++) {
                                //get skin info
                                if ($row = mysqli_fetch_assoc($pacmanSkins)) {
                                    $name = $row["name"];
                                    $status = $row["status"];
                                    $price = $row["price"];
                                } else {
                                    $name = '-';
                                    $price = '-';
                                }
                                if($status){    //user already has unlocked the skin
                                    echo ("<li>" . $name .
                                        "<div class='palette-container'>
                                            <div class='palette-square pacman " . $name . "'></div>
                                            <div class='select " . ($name == $skinsUsed['pacman'] ? "using" : "") . "
                                                'onclick='handleSkin(false, \"pacman\", \"$name\", \"$coins\", \"$price\")'>
                                            </div>
                                        </div>
                                    </li><hr>");                                
                                }
                                else {          //user has to unlock the skin
                                    echo ("<li>" . $name .
                                        "<div class='palette-container'>
                                            <div class='palette-square pacman " . $name . "'></div>
                                            <div class='locked' onclick='handleSkin(true, \"pacman\", \"$name\", \"$coins\", \"$price\")'></div>
                                            <div class='price'>" . $price . "¢</div>
                                            
                                        </div>
                                    </li><hr>");
                                }
                            }
                        ?>
                    </ul>
                </div>
            </section>
            <section id="ghosts-section" class="menu-section store">
                <h4>ghosts</h4>
                <div>
                    <ul>
                        <?php
                            for ($i = 1; $i <= 5; $i++) {
                                //get skin info
                                if ($row = mysqli_fetch_assoc($ghostSkins)) {
                                    $name = $row["name"];
                                    $status = $row["status"];
                                    $price = $row["price"];
                                } else {
                                    $name = '-';
                                    $price = '-';
                                }

                                if($status){    //user already has unlocked the skin
                                    echo ("<li>" . $name .
                                        "<div class='palette-container'>
                                            <div class='palette-square ghosts " . $name . " g1'></div>
                                            <div class='palette-square ghosts " . $name . " g2'></div>
                                            <div class='palette-square ghosts " . $name . " g3'></div>
                                            <div class='palette-square ghosts " . $name . " g4'></div>
                                            <div class='select " . ($name == $skinsUsed['ghosts'] ? "using" : "") . "
                                                'onclick='handleSkin(false, \"ghosts\", \"$name\", \"$coins\", \"$price\")'>
                                            </div>
                                        </div>
                                    </li><hr>");                                
                                }
                                else {          //user has to unlock the skin
                                    echo ("<li>" . $name .
                                        "<div class='palette-container'>
                                            <div class='palette-square ghosts " . $name . " g1'></div>
                                            <div class='palette-square ghosts " . $name . " g2'></div>
                                            <div class='palette-square ghosts " . $name . " g3'></div>
                                            <div class='palette-square ghosts " . $name . " g4'></div>
                                            <div class='locked' onclick='handleSkin(true, \"ghosts\", \"$name\", \"$coins\", \"$price\")'></div>
                                            <div class='price'>" . $price . "¢</div>
                                            
                                        </div>
                                    </li><hr>");
                                }
                            }
                        ?>
                    </ul>
                </div>
            </section>
            <section id="map-section" class="menu-section store">
                <h4>map</h4>
                <div>
                    <ul>
                        <?php
                            for ($i = 1; $i <= 7; $i++) {
                                //get skin info
                                if ($row = mysqli_fetch_assoc($mapSkins)) {
                                    $name = $row["name"];
                                    $status = $row["status"];
                                    $price = $row["price"];
                                } else {
                                    $name = '-';
                                    $price = '-';
                                }
                                if($status){    //user already has unlocked the skin
                                    echo ("<li>" . $name .
                                        "<div class='palette-container'>
                                            <div class='palette-square map " . $name . " m1'></div>
                                            <div class='palette-square map " . $name . " m2'></div>
                                            <div class='palette-square map " . $name . " m3'></div>
                                            <div class='palette-square map " . $name . " m4'></div>
                                            <div class='select " . ($name == $skinsUsed['map'] ? "using" : "") . "
                                                'onclick='handleSkin(false, \"map\", \"$name\", \"$coins\", \"$price\")'>
                                            </div>
                                        </div>
                                    </li><hr>");                                
                                }
                                else {          //user has to unlock the skin
                                    echo ("<li>" . $name .
                                        "<div class='palette-container'>
                                            <div class='palette-square map " . $name . " m1'></div>
                                            <div class='palette-square map " . $name . " m2'></div>
                                            <div class='palette-square map " . $name . " m3'></div>
                                            <div class='palette-square map " . $name . " m4'></div>
                                            <div class='locked' onclick='handleSkin(true, \"map\", \"$name\", \"$coins\", \"$price\")'></div>
                                            <div class='price'>" . $price . "¢</div>
                                        </div>
                                    </li><hr>");
                                }
                            }
                        ?>
                    </ul>
                </div>
            </section>
            
            <section class="review-section" id="main-section">
                
                <h4><?php echo ($_SESSION["username"]) ?></h4>
                <ul>
                    <li>coins: <?php echo $coins ?></li><hr>
                    <li>pacman: <?php echo $skinsUsed['pacman']?> </li>
                    <li>ghosts: <?php echo $skinsUsed['ghosts']?> </li>
                    <li>map: <?php echo $skinsUsed['map']?> </li>

                </ul>
            </section>
        </main>
        
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         