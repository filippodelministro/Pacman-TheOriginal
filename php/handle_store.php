<?php

function getUserCoins($user){
  $sql = "SELECT w.coins AS coins FROM wallet w WHERE w.user = ?";
  return sanitizeUser($sql, $user, "coins");

}

function getUserSkins($user){
  $sql = "SELECT s.pacman, s.ghosts, s.map FROM skinsApplied s WHERE s.user = ?";
  return sanitizeUserResult($sql, $user)->fetch_assoc();
}

function getPacmanSkins($user){
  $sql = "SELECT s.name, if(D.user is null, false, true) as status, s.price
          from
          (
            select *
            from unlocked u
            where u.user = ?
          ) as D right outer join skins s on s.type = D.type and s.name = D.name
          where s.type = 'pacman'
          order by s.price";

  return sanitizeUserResult($sql, $user);

}

function getGhostSkins($user){
  $sql = "SELECT s.name, if(D.user is null, false, true) as status, s.price
          from
          (
            select *
            from unlocked u
            where u.user = ?
          ) as D right outer join skins s on s.type = D.type and s.name = D.name
          where s.type = 'ghosts'
          order by s.price";

  return sanitizeUserResult($sql, $user);

}

function getMapSkins($user){
  $sql = "SELECT s.name, if(D.user is null, false, true) as status, s.price
          from
          (
            select *
            from unlocked u
            where u.user = ?
          ) as D right outer join skins s on s.type = D.type and s.name = D.name
          where s.type = 'map'
          order by s.price";

  return sanitizeUserResult($sql, $user);
}

// ------------- SANITIZE FUNCTIONS ----------------

//sanitize the value passed to server (just $user) and return all the result
function sanitizeUserResult($sql, $user){
  global $PacmanDB;

  if ($statement = mysqli_prepare($PacmanDB->mysqli_conn, $sql)) {
    mysqli_stmt_bind_param($statement, 'i', $user); 
    mysqli_stmt_execute($statement);

    $result = mysqli_stmt_get_result($statement);
    return $result;
  }
  else return 0;
}

//sanitize the value passed to server (just $user) and return just the $type value
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