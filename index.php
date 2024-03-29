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

        <link rel="icon" type="image/png" href="./images/ghost.png">
        <link rel="stylesheet" href="./css/mutual.css"> 
        <link rel="stylesheet" href="./css/index.css">
        <link rel="stylesheet" href="./css/footer.css">
        
        <script src="./js/effects/account.js"></script>
        <script src="./js/account/checkData.js"></script>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto%20Mono' rel='stylesheet'>
        <meta charset="utf-8">
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

            <div id="login" class="input-container appear">
                <form name="loginForm" action="./php/login.php" method="post" onSubmit="return validateLoginForm()">
                    <input type="text" placeholder="username" name="username" required autofocus>
                    <input type="password" placeholder="password" name="password" required>
                    <button type="submit">LOGIN</button>    
                </form>
            </div>

            <div id="register" class="input-container">
                <form name="registerForm" action="./php/register.php" method="post" onSubmit="return validateRegisterForm()">
                    <input type="text" placeholder="username" name="username" required>
                    <input type="password" placeholder="password" name="password" required>
                    <input type="password" placeholder="confirm password" name="confirmPassword" required>
                    <button type="submit">SIGN UP</button>
                </form>
            </div>

            <?php
                if (isset($_GET['errorMessage'])){
                    echo '<div class="error">';
                    echo $_GET['errorMessage']  ;
                    echo '</div>';
                }
            ?>
        </main>

        <a id="info" href="./html/info.html" class="icons">
            <span class="material-icons icons">info</span>
        </a>
        <?php    
            include "./php/utility/footer.php";
        ?>
    </body>
</html> 
