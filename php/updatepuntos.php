<?php
include 'conexion.php';
session_start();
$user = $_SESSION['usuario'];

mysqli_select_db($conn,"register");
$sql="SELECT * FROM register WHERE usuario = '".$user."'";
$result = mysqli_query($conn,$sql);

while($row = mysqli_fetch_array($result)) {
    echo $row['puntos'];
}
mysqli_close($conn);
?>