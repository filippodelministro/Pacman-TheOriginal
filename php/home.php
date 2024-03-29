<?php
    require_once "./utility/sessionUtil.php";
	session_start();
    if (!isLogged()){
        header('Location: ./../index.php');
        exit;
    }	
?>

<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <meta charset="UTF-8">    
        <link rel="icon" href="./../images/ghost.png">
        <link rel="stylesheet" href="./../css/mutual.css"> 
        <link rel="stylesheet" href="./../css/home.css">
        <link rel="stylesheet" href="./../css/footer.css">       
        
        <script src="./../js/effects/home.js"></script>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto%20Mono' rel='stylesheet'>
        <?php    
            include "./utility/footer.php";
        ?>
        
    </head>    
    <body>
        <header>
            <nav>
                <button class="menu-item" onclick="appear('about')">about</button>  
                <button class="menu-item" onclick="appear('command')">command</button> 
                <button class="menu-item" onclick="appear('instructions')">instructions</button> 
            </nav>
        </header>
        <main id="container" class="container">
            <section class="title-section">
                <h2>PACMAN: THE ORIGINAL.</h2>
                <p>The most played game in the '80</p>
            </section>
            
            <a id="store" href="./store.php" class="icons">
                <span class="material-icons">
                    shopping_bag
                </span>
            </a>
            <a id="leaderboard" href="./leaderboard.php" class="icons">
                <span class="material-icons">
                    leaderboard
                </span>
            </a>
            <a title='click here for logout' id="logout" href="./logout.php" class="icons">
               <span class="material-icons">
                   logout
               </span>
           </a>

            <section id="about" class="menu-section">
                <h4>about</h4>
                <p><mark>Pac-Man</mark> is one of the most known game in the world: surely one of the most played inside americans arcade in '90.<br>
                    Released in Japan <b>by NAMCO</b> it immediately become famous worldwide for his simple layout and his challenging gameplay.
                </p>
            </section>
            <section id="command" class="menu-section">
                <h4>commands</h4>
                <p>
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
            
            <section class="main-section" id="main-section">
            
                <img id="ghost" src="./../images/ghost.png" alt="ghost">
                    <a href="./pacman-game.php"><h2>Play here</h2></a>

            </section>

        </main>
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         