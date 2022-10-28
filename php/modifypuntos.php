<?php
include 'conexion.php';
session_start();
$points = intval($_GET['points']);
$user = $_SESSION['usuario'];

mysqli_select_db($conn,"register");
$sql="UPDATE register SET puntos = '".$points."' WHERE usuario = '".$user."'";
$result = mysqli_query($conn,$sql);

mysqli_close($conn);
?>