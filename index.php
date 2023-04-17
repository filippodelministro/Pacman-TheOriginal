<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" type="image/png" href="./images/ghost.png"/>
        <link rel="stylesheet" href="./css/material/materialLight.css">
        <link rel="stylesheet" href="./css/material/materialMutual.css"> 
        <link rel="stylesheet" href="./css/index.css">
        
        <script src="./js/effects/home.js"></script>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />            
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
            <a id="account" href="./php/player.php" class="icons">
                <span class="material-icons">
                    account_circle
                </span>
            </a>
            <a id="settings" href="./php/settings.php" class="icons">
                <span class="material-icons">
                    settings
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
            


            <section class="main-section" id="main-section">
            
                <img id="ghost" src="./images/ghost.png" alt="ghost">
                    <a href="./php/pacman-game.php"><h2>Play here</h2></a>

            </section>


            

            <button title="Click here for DarkMode" onclick="changeView()" >
                <span id="darkmode" class="material-icons icons">dark_mode</span>
            </button>
            
        </main>
        
        <footer class="retro-footer">
            <p>&copy; 2023 Pacman - The Original | <a href="https://github.com/filippodelministro">Filippo Del Ministro</a></p>
        </footer>
    </body>
</html>         