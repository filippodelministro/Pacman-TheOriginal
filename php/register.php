<?php
  require_once "./utility/pacmanDBManager.php"; 
  require_once "./utility/sessionUtil.php";
  
  $errorMessage = register($username, $password);
  if($errorMessage === null)
    header('location: ./home.php');
  else
    header('location: ./../index.php?errorMessage=' .$errorMessage);

function register($username, $password){
  if(!empty($_POST)){
    if(isset($_POST["username"]) && isset($_POST["password"])){
      $username = $_POST['username'];
      $password = $_POST['password'];

      //sanitize passed value to prevent injection & bad values
      global $PacmanDB;
      $PacmanDB->openConnection();
      $username = $PacmanDB->sqlInjectionFilter($username);
      $password = $PacmanDB->sqlInjectionFilter($password);
    
      // Check if username already exists
      $sql = 'SELECT * FROM user WHERE username = ?';
      if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $sql)) {
        mysqli_stmt_bind_param($statement, 's', $username); 
        mysqli_stmt_execute($statement);
        
        $result = mysqli_stmt_get_result($statement);
          if ($result->num_rows > 0) {
            return "Username already exists!";
          }
        } else {
          return "String not valid";
        }
      $PacmanDB->closeConnection();
      
      $newUserId = newUserId();
      $cryptpassword = password_hash($password, PASSWORD_BCRYPT);
        
      //insert new user
      sanitizeNewUser($newUserId, $username, $cryptpassword);
      sanitizeWallet($newUserId);

      //insert skins for new user: classic at signup
      sanitizeSkin($newUserId, "pacman");
      sanitizeSkin($newUserId, "ghosts");
      sanitizeSkin($newUserId, "map");
      sanitizeUsingSkin($newUserId);
      
      session_start();
      setSession($username, $newUserId);  
      return null;
    }
  }
}

function newUserId(){
  global $PacmanDB;
  $queryText = ' SELECT MAX(userId)as maxUserId FROM user';
  $result = $PacmanDB->performQuery($queryText);

  $maxUserId = $result->fetch_assoc();
  $PacmanDB->closeConnection();
  return $maxUserId['maxUserId'] + 1;
}

function sanitizeNewUser($newUserId, $username, $cryptpassword){
  global $PacmanDB;
  $PacmanDB->openConnection();
  $query = 'INSERT INTO user VALUES(?, ?, ?)';
  if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $query)) {
    mysqli_stmt_bind_param($statement, 'iss', $newUserId, $username, $cryptpassword); 
    mysqli_stmt_execute($statement);
  }
  $PacmanDB->closeConnection();
}

function sanitizeWallet($newUserId){
  $wallet = 0;

  global $PacmanDB;
  $PacmanDB->openConnection();
  $query = 'INSERT INTO wallet VALUES(?, ?)';
  if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $query)) {
    mysqli_stmt_bind_param($statement, 'ii', $newUserId, $wallet); 
    mysqli_stmt_execute($statement);
  }
  $PacmanDB->closeConnection();
}

function sanitizeSkin($newUserId, $type){
  $skin = "classic";

  global $PacmanDB;
  $PacmanDB->openConnection();
  $query = 'INSERT INTO unlocked VALUES(?, ?, ?)';
  if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $query)) {
    mysqli_stmt_bind_param($statement, 'iss', $newUserId, $type, $skin); 
    mysqli_stmt_execute($statement);
  }
  $PacmanDB->closeConnection();
}

function sanitizeUsingSkin($newUserId){
  $skin = "classic";

  global $PacmanDB;
  $PacmanDB->openConnection();
  $query = 'INSERT INTO skinsApplied VALUES(?, ?, ?, ?)';
  if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $query)) {
    mysqli_stmt_bind_param($statement, 'isss', $newUserId, $skin, $skin, $skin); 
    mysqli_stmt_execute($statement);
  }
  $PacmanDB->closeConnection();
}