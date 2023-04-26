<?php
	session_start();
    include "./php/utility/sessionUtil.php";

    if (isLogged()){
        header('Location: ./php/home.php');
        exit;
    }	
?>

<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>

        <link rel="icon" type="image/png" href="./images/ghost.png"/>
        <link rel="stylesheet" href="./css/material/materialLight.css">
        <link rel="stylesheet" href="./css/material/materialMutual.css"> 
        <link rel="stylesheet" href="./css/login.css">
        
        <script src="./js/effects/account.js"></script>
        <script src="./js/account/checkData.js"></script>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />
    </head>    
    <body>
        <header>
            <nav>
                <button class="menu-item" onclick="changeSection()">signup/login</button>  
            </nav>
        </header>

        <main id="container" class="container">
            <section class="title-section">
                <h2>PACMAN: Welcome</h2>
                <p>Login to enjoy the game</p>
            </section>
            <!-- <a id="back" href="./../index.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a> -->
            

            <div id="login" class="input-container appear">
                <form name="loginForm" action="./php/login.php" method="post" onSubmit="return validateLoginForm()">
                    <input type="text" placeholder="username" name="username" required autofocus/>
                    <input type="password" placeholder="password" name="password" required/>
                    <button type="submit">LOGIN</button>    
                </form>
            </div>

            <div id="register" class="input-container">
                <form name="registerForm" action="./php/register.php" method="post" onSubmit="return validateRegisterForm()">
                    <input type="text" placeholder="username" name="username" required autofocus/>
                    <input type="password" placeholder="password" name="password" required/>
                    <input type="password" placeholder="confirm password" name="confirmPassword" required/>
                    <button type="submit">SIGN UP</button>
                </form>
            </div>

            <button title="Click here for DarkMode" onclick="changeView()" >
                <span id="darkmode" class="material-icons icons">dark_mode</span>
            </button>
            
            <!-- //?? -->
            <!-- <?php
                if (isset($_GET['errorMessage'])){
                    echo '<div class="sign_in_error">';
                    echo $_GET['errorMessage']  ;
                    echo '</div>';
                }
            ?> -->
        </main>


        <?php    
            include "./php/utility/footer.php";
        ?>       
    </body>
</html> 
