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
                <button class="menu-item" onclick="appear('command')">command</button> 
                <button class="menu-item" onclick="appear('instructions')">instructions</button> 
            </nav>
        </header>
        <main id="container" class="container">
            <section class="title-section">
                <h2>PACMAN: Settings</h2>
                <p>[...]</p>
            </section>
            <a id="back" href="./home.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a>




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