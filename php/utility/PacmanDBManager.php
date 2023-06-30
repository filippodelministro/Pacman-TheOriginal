<?php  

    require "dbConfig.php"; 			// includes database class
    $PacmanDB = new PacmanDBManager();

	class PacmanDBManager {
		public $mysqli_conn = null;
	
		function __construct(){
			$this->openConnection();
		}
    
    	function openConnection(){
    		if (!$this->isOpened()){
				
				$this->mysqli_conn = mysqli_connect(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_NAME);

				if(mysqli_connect_errno())
					die('Connection error: ' . mysqli_connect_error());
			}
    	}
    
    	//Check if the connection to the database id opened
    	function isOpened(){
       		return ($this->mysqli_conn != null);
    	}

   		// Executes a query and returns the results
		function performQuery($queryText) {
			if (!$this->isOpened())
				$this->openConnection();
			
			return $this->mysqli_conn->query($queryText);
		}
		
		function sqlInjectionFilter($parameter){
			if(!$this->isOpened())
				$this->openConnection();
				
			return $this->mysqli_conn->real_escape_string($parameter);
		}

		function closeConnection(){
 	       	//Close the connection
 	       	if($this->mysqli_conn !== null)
				$this->mysqli_conn->close();
			
			$this->mysqli_conn = null;
		}
	}

?>