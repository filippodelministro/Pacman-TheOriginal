<?php

function getUserHighscore($user){
  $sql = "SELECT max(m.score) AS highscore FROM matches m WHERE m.user = ?";
  return sanitizeUser($sql, $user, "highscore");
}

function getUserTotPoints($user){
  $sql = "SELECT sum(m.score) AS totPoints FROM matches m WHERE m.user = ?";
  return sanitizeUser($sql, $user, "totPoints");
}

function getUserGhostKilled($user){
  $sql = "SELECT sum(m.ghostKilled) AS ghostKilled FROM matches m WHERE m.user = ?";
  return sanitizeUser($sql, $user, "ghostKilled");
}


function getGamePlayed($user){
  $sql = "SELECT count(*) as numMatches FROM matches m WHERE m.user = ?;";
  return sanitizeUser($sql, $user, "numMatches");
}

function getUserDuration($user){
  $sql = "SELECT sum(m.duration) AS totDuration FROM matches m WHERE m.user = ?";
  return sanitizeUser($sql, $user, "totDuration");
}

function getUserWin($user){
  $sql = "SELECT count(*) AS totWin FROM matches m WHERE m.user = ? AND m.win = true";
  return sanitizeUser($sql, $user, "totWin");
}

function getUserMinDuration($user){
  $sql = "SELECT min(m.Duration) AS minTimer FROM matches m WHERE m.user = ? AND m.win = true";
  return sanitizeUser($sql, $user, "minTimer");
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


// ------------- SANITIZE FUNCTIONS ----------------

//sanitize the value passed to server (just $user)
function sanitizeUser($sql, $user, $type){
  global $PacmanDB;

  if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $sql)) {
    mysqli_stmt_bind_param($statement, 'i', $user); 
    mysqli_stmt_execute($statement);

    $result = mysqli_stmt_get_result($statement);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
        return $row[$type];
        }
    } else return 0;
  }
  else return 0;
}

?>