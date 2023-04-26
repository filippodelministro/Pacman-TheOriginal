<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" type="image/png" href="./../images/ghost.png"/>
        <link rel="stylesheet" href="./../css/material/materialLight.css">
        <link rel="stylesheet" href="./../css/material/materialMutual.css"> 
        <script src="./../js/home.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>

    </head>
    
    <header> <nav id="menu"></nav></header>  

    
    <body>

        
        <main id="container" class="container">

            <a id="settings" href="./home.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a>
        
            <section class="title-section">

                <h2>SETTINGS PAGE</h2>
                <p>Info about the settings</p>

            </section>

            <button title="Click here for DarkMode" onclick="changeView()" >
                <span id="darkmode" class="material-icons icons">dark_mode</span>
            </button>
            

        </main>
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         