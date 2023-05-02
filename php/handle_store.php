<?php

function getUserCoins($user){
    global $PacmanDB;
    $sql = "SELECT w.coins AS coins FROM wallet w WHERE w.user = $user";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["coins"];
        }
      } else {
        return 0;
    }
}

?>