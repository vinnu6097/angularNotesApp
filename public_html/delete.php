<?php

$con = mysqli_connect("localhost", "root", "root", "notes");

$data = json_decode(file_get_contents("php://input"));

$todo = mysqli_real_escape_string($con, $data->todo);

$query = "DELETE FROM `task` WHERE `notes`='$notes' LIMIT 1;";

mysqli_query($con, $query);
echo true;

?>
