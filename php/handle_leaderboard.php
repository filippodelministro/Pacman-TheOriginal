<!-- handle_leaderboard.php -->
<!-- Filippo Del Ministro, 21.05.23 -->

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

function getToprank(){
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

function getStats(){
  global $PacmanDB;
  $sql = "SELECT DD.username, DD.avgScore, DD.avgGhost, DD.avgWin
            from
            (
            select u.username,
              max(m.score) as highscore,
              sum(m.score)/D.Nmatches as avgScore,
              sum(m.ghostKilled)/D.Nmatches as avgGhost,
              sum(m.win)/D.Nmatches as avgWin
              from matches m inner join (
              SELECT m.user, count(*) as Nmatches
              FROM matches m 
              group by m.user
              ) as D on m.user = D.user
              inner join user u on u.userId = m.user
              group by m.user
            ) as DD
            order by DD.highscore desc";

  return $PacmanDB->performQuery($sql);
}

?>