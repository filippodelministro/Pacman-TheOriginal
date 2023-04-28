<?php

function getGamePlayed($user){
    global $PacmanDB;
    $sql = "SELECT count(*) as numMatches
            FROM matches m
            WHERE m.user = $user;";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["numMatches"];
        }
      } else {
        echo "Nessun risultato trovato";
    }
}

function getUserHighscore($user){
    global $PacmanDB;
    $sql = "SELECT max(m.score) AS highscore FROM matches m WHERE m.user = $user";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["highscore"];
        }
      } else {
        echo "Nessun risultato trovato";
    }
}

function getUserDuration($user){
    global $PacmanDB;
    $sql = "SELECT sum(m.duration) AS totDuration FROM matches m WHERE m.user = $user";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["totDuration"];
        }
      } else {
        echo "Nessun risultato trovato";
    }
}

function getRank(){
    global $PacmanDB;
    $sql = "SELECT D.*
            FROM
            (
                SELECT u.username, max(m.score) AS highscore
                FROM matches m INNER JOIN user u ON m.user = u.userId
                GROUP BY m.user
            ) AS D
            ORDER BY D.highscore DESC";

    return $PacmanDB->performQuery($sql);
}

?>