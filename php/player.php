<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" type="image/png" href="./../images/ghost.png"/>
        <link rel="stylesheet" href="./../css/material/materialLight.css">
        <link rel="stylesheet" href="./../css/material/materialMutual.css"> 
        <link rel="stylesheet" href="./../css/login.css">
        <script src="./../js/effects/login.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>

    </head>

 
    <header> <nav id="menu"></nav></header>
    
    <body>
        <main id="container" class="container">
            <a id="settings" href="./../index.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a>

            <section class="title-section">

                <h2>ACCOUNT PAGE</h2>
                <p>Setup your account informations</p>

                <div id="about" class="input-container login">
                    <form>
                        <input type="text" placeholder="username" id="username"/>
                        <input type="password" placeholder="password" id="password"/>
                        <button type="button">LOGIN</button>
                        
                    </form>
                </div>

                <button class="menu-item" onclick="appear('register')">register now</button>  

                <div id="register" class="input-container register">
                    <form>
                        <input type="text" placeholder="username" id="username"/>
                        <input type="password" placeholder="password" id="password"/>
                        <input type="password" placeholder="confirm password" id="confirm"/>
                        <button type="button">SIGN UP</button>
                        
                    </form>
                </div>
            </section>



           

            <button title="Click here for DarkMode" onclick="changeView()" >
                <span id="darkmode" class="material-icons icons">dark_mode</span>
            </button>
            

            
        </main>
        <!--? BOH -->
        <footer class="retro-footer">
            <p>&copy; 2023 Pacman - The Original | <a href="https://github.com/filippodelministro">Filippo Del Ministro</a></p>
        </footer>
    </body>
</html>         