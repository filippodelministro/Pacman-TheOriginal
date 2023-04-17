<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" type="image/png" href="./../images/ghost.png"/>
        <script src="./../js/game/const.js"></script>
        <script src="./../js/game/game.js"></script>        
        <script src="./../js/game/map.js"></script>
        <script src="./../js/game/pacman.js"></script>
        <script src="./../js/game/ghosts.js"></script>
        <script src="./../js/game/utility.js"></script>


        <link rel="stylesheet" href="./../css/pacman-game.css"> 
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>

        <meta charset="utf-8" />
    </head>

    <body>

        <p id="startinfo">
            <span class="blink">[press any key to start the game]</span>
        </p>

        <div id="playground" class="playground">   
            <div id="map" class="map"></div>

            <div id="gameinfo">
                <h3>PLAYERNAME</h3>
                <p class="score">score: </p>
                <p id="score" class="score">0</p>

                <p class="life">life: </p>
                <p id="life" class="life">5</p>
            </div>
        </div>


        <div id="pause-menu-container">
            <nav class="pause-menu">
                <a onclick="game.resume()">resume</a> <br>
                <a href="./pacman-game.php">restart</a> <br>
                <a href="./../index.php">exit</a> <br>
            </nav>
            <h3 class="blink">PAUSE</h3>
            <p class="blink">[press ESC to resume]</p>
        </div>
        <div class="pause-menu-overlay"></div> 
        
        <div id="end-game-menu" class="end-game-menu">
            <nav class="pause-menu">
                <a href="./pacman-game.php">restart</a> <br>
                <a href="./../index.php">exit</a> <br>
            </nav>
        </div>

    </body>

</html>         