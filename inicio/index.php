<!DOCTYPE html>
<?php

session_start();
$user =  $_SESSION['usuario'];

if(!isset($user)){
    header("location: ../php/login.php");
}else{

echo "
<html>
<head>
    <meta charset='UTF-8'/>
    <link rel='stylesheet' href='../css/inicio.css'>
    <link rel='icon' type='image/png' href='../images/Flets.png'>
    <title>Flets | Inicio</title>
</head>
<body>
    <header>
        <a><img src='../images/Flets.png' alt='Logo Flets'></a>
        <div>
            <a href='../depositar' id='usuario'>$user</a>
            <a href='../depositar' id='puntos'></a>
            <a id='logout' href='../php/logout.php'>Salir</a>
        </div>
    </header>
    <main>
        <div id='listaJuegos'>
            <div id='headerJuegos'>
                <p id='tituloJuegos'>Juegos:</p>
                <a id='faq' href='../faq'>Preguntas frecuentes</a>
            </div>
            <div id='lista'>
                <a href='../games/highlow'><img src='../games/icons/higherorlower.png' alt='higher or lower'></a>
                <a href='../games/dicegame'><img src='../games/icons/dicegame.png' alt='dice game'></a>
                <a href='../games/plinko'><img src='../games/icons/plinko.png' alt='higher or lower'></a>
                <a href='../games/roulette'><img src='../games/icons/roulette.png' alt='higher or lower'></a>
            </div>
        </div>
    </main>
    <script src='../js/updatepuntos.js'></script>
</body>
</html>";
}
?>

