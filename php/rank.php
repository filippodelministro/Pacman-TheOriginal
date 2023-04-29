<?php

function getUserHighscore($user){
    global $PacmanDB;
    $sql = "SELECT max(m.score) AS highscore FROM matches m WHERE m.user = $user";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["highscore"];
        }
      } else {
        return 0;
    }
}

function getUserTotPoints($user){
    global $PacmanDB;
    $sql = "SELECT sum(m.score) AS highscore FROM matches m WHERE m.user = $user";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["highscore"];
        }
      } else {
        return 0;
    }
}

function getUserGhostKilled($user){
    global $PacmanDB;
    $sql = "SELECT sum(m.ghostKilled) AS highscore FROM matches m WHERE m.user = $user";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["highscore"];
        }
      } else {
        return 0;
    }
}


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
        return 0;
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
        return 0;
    }
}

function getUserWin($user){
    global $PacmanDB;
    $sql = "SELECT count(*) AS totWin FROM matches m WHERE m.user = $user AND m.win = true";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["totWin"];
        }
      } else {
        return 0;
    }
}

function getUserMinDuration($user){
    global $PacmanDB;
    $sql = "SELECT min(m.Duration) AS minTimer FROM matches m WHERE m.user = $user AND m.win = true";
    $result = $PacmanDB->performQuery($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
          return $row["minTimer"];
        }
      } else {
        return 0;
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