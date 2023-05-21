<!-- handle_store.php -->
<!-- Filippo Del Ministro, 21.05.23 -->

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


function getUserSkins($user){
  global $PacmanDB;
  $sql = "SELECT s.pacman, s.ghosts, s.map FROM skinsApplied s WHERE s.user = $user";
  $result = $PacmanDB->performQuery($sql);

  if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        return $row;
      }
    } else {
    return 0;
  }
}


function getPacmanSkins($user){
  global $PacmanDB;
  $sql = "SELECT s.name, if(D.user is null, false, true) as status, s.price
          from
          (
            select *
            from unlocked u
            where u.user = $user
          ) as D right outer join skins s on s.type = D.type and s.name = D.name
          where s.type = 'pacman'
          order by s.price";

  return $PacmanDB->performQuery($sql);
}

function getGhostSkins($user){
  global $PacmanDB;
  $sql = "SELECT s.name, if(D.user is null, false, true) as status, s.price
          from
          (
            select *
            from unlocked u
            where u.user = $user
          ) as D right outer join skins s on s.type = D.type and s.name = D.name
          where s.type = 'ghosts'
          order by s.price";

  return $PacmanDB->performQuery($sql);
}

function getMapSkins($user){
  global $PacmanDB;
  $sql = "SELECT s.name, if(D.user is null, false, true) as status, s.price
          from
          (
            select *
            from unlocked u
            where u.user = $user
          ) as D right outer join skins s on s.type = D.type and s.name = D.name
          where s.type = 'map'
          order by s.price";

  return $PacmanDB->performQuery($sql);
}
?>