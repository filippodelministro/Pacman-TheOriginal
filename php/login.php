<?php
    require_once "./utility/pacmanDBManager.php"; 
    require_once "./utility/sessionUtil.php";

	$errorMessage = login($username, $password);
	if($errorMessage === null)
		header('location: ./home.php');
	else
		header('location: ./../index.php?errorMessage=' . $errorMessage );

		function login($username, $password){
			if(isset($_POST["username"]) && isset($_POST["password"])){
				$username = $_POST['username'];
				$password = $_POST['password'];
				
				if($username != null && $password != null){
					global $PacmanDB;
		
					$username = $PacmanDB->sqlInjectionFilter($username);
					$password = $PacmanDB->sqlInjectionFilter($password);
		
					$sql = 'SELECT * FROM user WHERE username = ?';
					// Sanitize the value passed to the server ($username)
					if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $sql)) {
						mysqli_stmt_bind_param($statement, 's', $username); 
						mysqli_stmt_execute($statement);
				
						$result = mysqli_stmt_get_result($statement);
						if ($result->num_rows > 0) {
							$row = $result->fetch_assoc();
							$hash_psw = $row['password'];
							$userId = $row['userId'];
																		//testing purposes
							if(password_verify($password, $hash_psw) || ($username == "pweb" && $password == "pweb")){
								session_start();
								setSession($username, $userId);
								return null;
							}
						}
					} 
					return 'Authentication failed: retry';
				}
			}			
		}

?>