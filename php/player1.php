<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" type="image/png" href="./images/ghost.png"/>
        <link rel="stylesheet" href="./../css/material/materialLight.css">
        <link rel="stylesheet" href="./../css/material/materialMutual.css"> 
        <link rel="stylesheet" href="./../css/login1.css">
        
        <script src="./../js/effects/login.js"></script>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />            
    </head>    
    <body>
        <header>
            <nav>
                <button class="menu-item" onclick="appear('about')">register now</button>  
            </nav>
        </header>

        <main id="container" class="container">
            <section class="title-section">
                <h2>PLAYER....</h2>
                <p>todo:The most played game in the '80</p>
            </section>
            <a id="back" href="./php/index.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a>
            



            <div id="about" class="input-container">
                <h4>about</h4>
                <p><mark>Pac-Man</mark> is one of the most known game in the world: surely one of the most played inside americans arcade in '90.<br>
                    Released in Japan <b>by NAMCO</b> it immediately become famous worldwide for his simple layout and his challenging gameplay.
                </p>
            </div>
            <div id="command" class="input-container">
                <h4>commands</h4>
                <p id="command">
                    <span class="material-icons key">north</span> :UP <br>
                    <span class="material-icons key">west</span> :LEFT <br>
                    <span class="material-icons key">east</span> :RIGHT <br>
                    <span class="material-icons key">south</span> :DOWN <br>
                    <span class="material-icons key">space_bar</span> :pause/resume <br>
                </p>
            </div>




            

            <button title="Click here for DarkMode" onclick="changeView()" >
                <span id="darkmode" class="material-icons icons">dark_mode</span>
            </button>
            
        </main>
        
        <footer class="retro-footer">
            <p>&copy; 2023 Pacman - The Original | <a href="https://github.com/filippodelministro">Filippo Del Ministro</a></p>
        </footer>
    </body>
</html>         