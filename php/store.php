<?php
	session_start();
    require_once "./utility/pacmanDbManager.php";
    require_once "./utility/sessionUtil.php";
    include "./handle_store.php";

    global $PacmanDB;
    $username = $_SESSION['username'];
    $userId = $_SESSION['userId'];

   //get user data: for rewiew box
   $coins = getUserCoins($userId);
   $skinsUsed = getUserSkins($userId);

   //get skins prices
   $pacmanSkins = getPacmanSkins($userId);
?>

<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <title>Pacman</title>
        <link rel="icon" href="./../images/ghost.png"/>
        <link rel="stylesheet" href="./../css/mutual.css"> 
        <link rel="stylesheet" href="./../css/home.css">
        <link rel="stylesheet" href="./../css/store.css">

        <script src="./../js/effects/store.js"></script>
        <script src="./../js/ajax/updateDB.js"></script>

        <link rel="stylesheet" href="./skins.php">

        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
        <meta charset="utf-8" />            
    </head>    
    <body>
        <header>
            <nav>
                <button class="menu-item" onclick="appear('map-section')">map</button> 
                <button class="menu-item" onclick="appear('ghosts-section')">ghosts</button> 
                <button class="menu-item" onclick="appear('pacman-section')">pacman</button> 
            </nav>
        </header>
        <main id="container" class="container">
            <section class="title-section">
                <h2>PACMAN: Store</h2>
                <p>Buy new skin and customize your Pacman!</p>
            </section>
            <a id="back" href="./home.php" class="icons">
                <span class="material-icons">
                    arrow_back_ios
                </span>
            </a>


            <section id="pacman-section" class="menu-section store">
                <h4>pacman</h4>
                <div>
                    <ul>
                        <?php
                            for ($i = 1; $i <= 5; $i++) {
                                if ($row = mysqli_fetch_assoc($pacmanSkins)) {
                                    $name = $row["name"];
                                    $status = $row["status"];
                                    $price = $row["price"];
                                } else {
                                    $name = '-';
                                    $price = '-';
                                }
                                
                                if($status){    //user already has unlocked the skin
                                    echo ("<li>" . $name .
                                        "<div class='palette-container'>
                                            <div class='palette-square pacman " . $name . "'></div>
                                            <div class='select " . ($name == $skinsUsed['pacman'] ? "using" : "") . "' onclick='handleSkin(\"false\", \"pacman\", \"$name\")'></div>
                                        </div>
                                    </li><hr>");                                
                                }
                                else {          //user has to unlock the skin
                                    echo ("<li>" . $name .
                                        "<div class='palette-container'>
                                            <div class='palette-square pacman " . $name . "'></div>
                                            <div class='locked' onclick='handleSkin(\"true\", \"pacman\", \"$name\")'></div>
                                            <div class='price'>" . $price . "¢</div>
                                            
                                        </div>
                                    </li><hr>");
                                }

                                    // echo ("<li class='ranking'>");
                                // echo ("<td class='ranking pos'>" . $i . ".</td>");
                                // echo ("<td class='ranking'>" . $username . "</td>");
                                // echo ("<td class='ranking'>" . $hs . "</td>");
                                // echo ("</tr>");
                            }
                        ?>
                        <!-- <li>classic: <div class='palette-container'><div class='palette-square pacman' style='background-color:rgb(255, 200, 0)'></div></div></li><hr>
                        <li>red: <div class='palette-container'><div class='palette-square pacman' style='background-color:rgb(203, 0,  0);'></div></div></li><hr>
                        <li>green: <div class='palette-container'><div class='palette-square pacman' style='background-color:rgb(0, 255,  0)'></div></div></li><hr>
                        <li>fucsia: <div class='palette-container'><div class='palette-square pacman' style='background-color:rgb(255, 0,  239)'></div></div></li><hr>
                        <li>white: <div class='palette-container'><div class='palette-square pacman' style='background-color:rgb(255, 255, 255)'></div></div></li><hr> -->
                    </ul>
                </div>
            </section>
            <section id="ghosts-section" class="menu-section store">
                <h4>ghosts</h4>
                <div>
                    <ul>
                        <li>classic:
                            <div class='palette-container'>
                                <div class='palette-square ghost' style='background-color:blue'></div>
                                <div class='palette-square ghost' style='background-color:red'></div>
                                <div class='palette-square ghost' style='background-color:orange'></div>
                                <div class='palette-square ghost' style='background-color:pink'></div>
                            </div>
                        </li><hr>
                        <li>vintage:
                            <div class='palette-container'>
                                <div class='palette-square ghost' style='background-color:rgb(50, 150, 200)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(200, 50, 50)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(200, 200, 50)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(50, 200, 50)'></div>
                            </div>
                        </li><hr>
                        <li>space:
                            <div class='palette-container'>
                                <div class='palette-square ghost' style='background-color:rgb(0, 0, 102)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(51, 255, 255)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(255, 51, 153)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(255, 255, 0)'></div>
                            </div>
                        </li><hr>
                        <li>black&white:
                            <div class='palette-container'>
                                <div class='palette-square ghost' style='background-color:rgb(100, 100, 100)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(150, 150, 150)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(200, 200, 200)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(250, 250, 250)'></div>
                            </div>
                        </li><hr>
                        <li>monocolor:
                            <div class='palette-container'>
                                <div class='palette-square ghost' style='background-color:rgb(255, 0, 0)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(255, 0, 0)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(255, 0, 0)'></div>
                                <div class='palette-square ghost' style='background-color:rgb(255, 0, 0)'></div>
                            </div>
                        </li><hr>
                    </ul>
                </div>
            </section>
            <section id="map-section" class="menu-section store">
                <h4>map</h4>
                <div>
                    <ul>
                        <li>classic:
                            <div class='palette-container'>
                                <div class='palette-square' style='background-color:rgb(0, 0, 0)'></div>
                                <div class='palette-square' style='background-color:rgb(0, 0, 105)'></div>
                                <div class='palette-square' style='background-color:rgb(0, 0, 67)'></div>
                                <div class='palette-square' style='background-color:rgb(255, 255, 255)'></div>
                            </div>
                        </li><hr>
                        <li>artic:
                            <div class='palette-container'>
                                <div class='palette-square' style='background-color:rgb(160, 210, 230)'></div>
                                <div class='palette-square' style='background-color:rgb(92, 122, 129)'></div>
                                <div class='palette-square' style='background-color:rgb(242, 242, 247)'></div>
                                <div class='palette-square' style='background-color:rgb(169, 183, 198)'></div>
                            </div>
                        </li><hr>
                        <li>desert:
                            <div class='palette-container'>
                                <div class='palette-square' style='background-color:rgb(255, 153, 0)'></div>
                                <div class='palette-square' style='background-color:rgb(255, 51, 0)'></div>
                                <div class='palette-square' style='background-color:rgb(200, 130, 0)'></div>
                                <div class='palette-square' style='background-color:rgb(255, 255, 0)'></div>
                            </div>
                        </li><hr>
                        <li>jungle:
                            <div class='palette-container'>
                                <div class='palette-square' style='background-color:rgb(0, 170, 120)'></div>
                                <div class='palette-square' style='background-color:rgb(0, 255, 30)'></div>
                                <div class='palette-square' style='background-color:rgb(10, 70, 30)'></div>
                                <div class='palette-square' style='background-color:rgb(20, 120, 20)'></div>
                            </div>
                        </li><hr>
                        <li>seaside:
                            <div class='palette-container'>
                                <div class='palette-square' style='background-color:rgb(51, 153, 255)'></div>
                                <div class='palette-square' style='background-color:rgb(255, 188, 0)'></div>
                                <div class='palette-square' style='background-color:rgb(0, 76, 153)'></div>
                                <div class='palette-square' style='background-color:rgb(255, 128, 0)'></div>
                            </div>
                        </li><hr>
                        <li>lollipop:
                            <div class='palette-container'>
                                <div class='palette-square' style='background-color:rgb(255, 153, 153)'></div>
                                <div class='palette-square' style='background-color:rgb(153, 51, 255)'></div>
                                <div class='palette-square' style='background-color:rgb(102, 178, 255)'></div>
                                <div class='palette-square' style='background-color:rgb(255, 255, 102)'></div>
                            </div>
                        </li><hr>
                        <li>black&white:
                            <div class='palette-container'>
                                <div class='palette-square' style='background-color:rgb(0, 0, 0)'></div>
                                <div class='palette-square' style='background-color:rgb(255, 255, 255)'></div>
                                <div class='palette-square' style='background-color:rgb(255, 255, 255)'></div>
                                <div class='palette-square' style='background-color:rgb(100, 100, 100)'></div>
                            </div>
                        </li><hr>
                       
                        
                    </ul>
                </div>
            </section>
            
            <section class="review-section" id="main-section">
                
                <h4><?php echo ($_SESSION["username"]) ?></h4>
                <ul>
                    <li>coins: <?php echo $coins ?></li><hr>
                    <li>pacman: <?php echo $skinsUsed['pacman']?> </li>
                    <li>ghosts: <?php echo $skinsUsed['ghosts']?> </li>
                    <li>map: <?php echo $skinsUsed['map']?> </li>

                </ul>
            </section>
        </main>
        
        <?php    
            include "./utility/footer.php";
        ?>
    </body>
</html>         