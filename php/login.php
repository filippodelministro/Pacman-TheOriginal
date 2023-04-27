<?php
    require_once "./utility/pacmanDBManager.php"; 
    require_once "./utility/sessionUtil.php";

	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$errorMessage = login($username, $password);
	if($errorMessage === null)
		header('location: ./home.php');
	else
		header('location: ./../index.php?errorMessage=' . $errorMessage );


	function login($username, $password){   
		if ($username != null && $password != null){
			$password = md5($password);
			$userRow = authenticate($username, $password);
			$userId = $userRow['userId'];
			$userType = $userRow['userType'];

			//check if userID is valid
    		if ($userId > 0){
    			session_start();
    			setSession($username, $userId);
    			return null;
    		}

    	}
		
    	return 'Authentication failed: retry';
	}
	
	function authenticate ($username, $password){   
		global $PacmanDB;
		$username = $PacmanDB->sqlInjectionFilter($username);
		$password = $PacmanDB->sqlInjectionFilter($password);

		$queryText = 'SELECT * FROM user WHERE username = \'' . $username . '\' AND password=\'' . $password . '\'';

		$result = $PacmanDB->performQuery($queryText);
		$numRow = mysqli_num_rows($result);
		if ($numRow != 1)
			return -1;
		
		$PacmanDB->closeConnection();
		$userRow = $result->fetch_assoc();
		$PacmanDB->closeConnection();
		return $userRow;
	}

?>