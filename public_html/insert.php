<?php

$con = mysqli_connect("localhost", "root", "root", "notes");

$data = json_decode(file_get_contents("php://input"));

$todo = mysqli_real_escape_string($con, $data->todo);

$query = "INSERT INTO `notes`.`task` (`notes`) VALUES ('$todo');";
// Inserting data into database
mysqli_query($con, $query);
echo true;

?>
