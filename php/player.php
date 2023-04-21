<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" type="image/png" href="./../images/ghost.png"/>
        <link rel="stylesheet" href="./../css/material/materialLight.css">
        <link rel="stylesheet" href="./../css/material/materialMutual.css"> 
        <link rel="stylesheet" href="./../css/login.css">
        
        <script src="./../js/effects/login.js"></script>
        <script src="./../js/player/checkData.js"></script>
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />
    </head>    
    <body>
        <header>
            <nav>
                <button class="menu-item" onclick="appear('register')">register now</button>  
            </nav>
        </header>

        <main id="container" class="container">
            <section class="title-section">
                <h2>PLAYER....</h2>
                <p>todo:The most played game in the '80</p>
            </section>
            <a id="back" href="./../index.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a>
            



            <div id="login" class="input-container appear">
                <form>
                    <input type="text" placeholder="username" id="LoginUsername"/>
                    <input type="password" placeholder="password" id="LoginPassword"/>
                    <button type="button">LOGIN</button>
                </form>
            </div>

            <div id="register" class="input-container">
                <form action="player.php" method="POST" name="RegisterForm">
                    <input type="text" placeholder="username" id="RegisterUsername"/>
                    <input type="password" placeholder="password" id="RegisterPassword"/>
                    <input type="password" placeholder="confirm password" id="RegisterConfirm"/>
                    <button type="button" onclick="checkData()" >SIGN UP</button>
                </form>
            </div>

            <button title="Click here for DarkMode" onclick="changeView()" >
                <span id="darkmode" class="material-icons icons">dark_mode</span>
            </button>
            
        </main>
        <?php    
            include "./utility/footer.php";
        ?>

        
    </body>
</html> 

<?php
   

$uname = $_POST["uname"];
$psw = $_POST["psw1"];

if (empty($uname)) {
    echo ("<script>alert('Errore: il nome utente non può essere vuoto'); 
                    window.history.back();
            </script>");
    exit();
}
// Una password costituita dal solo carattere 0 non è considerata valida
if (empty($psw)) {
    echo ("<script>alert('Errore: la password non può essere vuota'); 
                    window.history.back();
            </script>");
    exit();
}
registrazione($uname, $psw);

function registrazione($uname, $psw)
{
    require_once "./connection.php";

    if (!$connection) {
        die("Connessione al database fallita: " . mysqli_connect_error());
    } else {
        echo "Connessione al database stabilita con successo.";
    }


    // $pswHashed = password_hash($psw, PASSWORD_BCRYPT);
    // $sql = "INSERT INTO user VALUES (?, ?, 1, 1)";
    // $statement = mysqli_prepare($connection, $sql);
    // mysqli_stmt_bind_param($statement, 'ss', $uname, $pswHashed);
    // if (!mysqli_stmt_execute($statement)) {
    //     echo ("<script>alert('Errore: utente già registrato'); window.history.back(); </script>");
    //     exit();
    // }
    // $sql = "INSERT INTO sbloccato VALUE(" . "'" . $uname . "'" . ", 1, null)";
    // mysqli_query($connection, $sql);
    // echo ("<script>alert('Utente registrato con successo'); window.history.back(); </script>");
    // $_SESSION["username"] = $uname;
    // header("location: menu.php");
    exit();
}
?>