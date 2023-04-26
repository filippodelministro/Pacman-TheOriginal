<?php
  require_once "./utility/PacmanDBManager.php"; //includes Database Class
  require_once "./utility/sessionUtil.php"; //includes sessinUtil.php"; //includes session login

  $username = $_POST['username'];
  $password = $_POST['password'];

  $errorMessage = register($username, $password);
  if($errorMessage === null)
    header('location: ./home.php');
  else
    header('location: ./../index.php?errorMessage=' .$errorMessage);

function register($username, $password){
    global $PacmanDB;
    
    $username = $PacmanDB->sqlInjectionFilter($username);
    $password = $PacmanDB->sqlInjectionFilter($password);

    // controllo se username o email sono già associati ad un account
    $queryText = 'SELECT * FROM user WHERE username=\'' . $username . '\'';
    $result = $PacmanDB->performQuery($queryText);
    $user = mysqli_fetch_assoc($result);
      
    if ($user) {
      if ($user['username'] === $username) {
        return 'Username già esistente';
      }
    } 

    // Registrazione effettiva del nuovo utente
    $newUserId = newUserId();  //serve per settare la sessione
    $cryptpassword = md5($password);//encrypt the password before saving in the database COPIATO

  	$query = 'INSERT INTO user VALUES(NULL, \'' . $username . '\', \'' . $cryptpassword . '\')';
  	$PacmanDB->performQuery($query);
    session_start();
    setSession($username, $newUserId);  
    return null;
}

function newUserId(){
    global $PacmanDB;

    $queryText = ' SELECT MAX(userId)as maxUserId FROM user';
    $result = $PacmanDB->performQuery($queryText);

    $maxUserId = $result->fetch_assoc();
    $PacmanDB->closeConnection();
    return $maxUserId['maxUserId'] + 1;   
}

