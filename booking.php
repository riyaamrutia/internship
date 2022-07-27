<?php

$con = mysqli_connect('localhost', 'root', '','bookingDB');

$tid = $_POST['tid'];
$name = $_POST['name'];
$num = $_POST['num'];
$ppl = $_POST['ppl'];
$time = $_POST['time'];

$sql = "INSERT INTO `reservationTB` (`tableID`,`cName`, `cPhone`, `numOfPeople`, `date`) VALUES ('$tid','$name', '$num', '$ppl', '$time')";

$rs = mysqli_query($con, $sql);

header('location:home.html');
if($rs)
{
	echo "Your table is reserved.";
}



?> 