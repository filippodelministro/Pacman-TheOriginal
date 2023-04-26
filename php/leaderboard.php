<?php
	session_start();
    include "./utility/sessionUtil.php";

    if (!isLogged()){
        header('Location: ./../index.php');
        exit;
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
        
        <!-- //todo: add settings  -->
        <script src="./../js/effects/home.js"></script>

        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />            
    </head>    
    <body>
        <header>
            <nav>
                <!-- //todo: change -->
                <button class="menu-item" onclick="appear('about')">about</button>  
                <button class="menu-item" onclick="appear('command')">rankings</button> 
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


            <section id="about" class="menu-section appear">
                <h4>about</h4>
                <p><mark>Pac-Man</mark> is one of the most known game in the world: surely one of the most played inside americans arcade in '90.<br>
                    Released in Japan <b>by NAMCO</b> it immediately become famous worldwide for his simple layout and his challenging gameplay.
                </p>
            </section>
            <section id="command" class="menu-section">
                <h4>commands</h4>
                <p id="command">
                    <span class="material-icons key">north</span> :UP <br>
                    <span class="material-icons key">west</span> :LEFT <br>
                    <span class="material-icons key">east</span> :RIGHT <br>
                    <span class="material-icons key">south</span> :DOWN <br>
                    <span class="material-icons key">space_bar</span> :pause/resume <br>
                </p>
            </section>
            <section id="instructions" class="menu-section">
                <h4>instructions</h4>
                <p>Move Pacman and try to eat all the food in the map. <br> Pay attention to the <mark>ghost</mark>! They can also move
                    around the map trying to catch you: if they do, you will lose a life. <br>
                    Eat <b>cherry</b> to make ghosts harmless and eat them to gain extra points! 
                </p>
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