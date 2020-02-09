<?php
  $server   = "SERVER";
  $user     = "USER";
  $password = "PASS";
  $database = "DB";

  $conn = mysqli_connect($server, $user, $password, $database);
  if(!$conn){
    die("Database Connection Failed");
  }
