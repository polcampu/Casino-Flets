<!DOCTYPE html>
<?php

session_start();
$user =  $_SESSION['usuario'];

if(!isset($user)){
    header('location: ../../php/login.php');
}else{

echo "
<html>
<head>
    <meta charset='UTF-8'/>
    <link rel='stylesheet' href='../../css/plinko.css'>
    <title>Flets | Plinko</title>
    <link rel='icon' type='image/png' href='../../images/Flets.png'>
</head>
<body>
    <header>
        <a href='../../inicio'><img src='../../images/Flets.png' alt='Logo Flets'></a>
        <div>
            <a href='../../depositar' id='usuario'>$user</a>
            <a href='../../depositar' id='puntos'></a>
            <a id='logout' href='../../php/logout.php'>Salir</a>
        </div>
    </header>
    <main>
        <div id='listaJuegos'>
            <div id='headerJuegos'>
                <p id='tituloJuegos'>Plinko:</p>
                <a id='faq' href='../../inicio'>&#11013; Volver a juegos</a>
            </div>
            <div id='plinko-board'>
                <ul class='buckets'>
                    <li id='one'>0</li>
                    <li id='two'>0</li>
                    <li id='three'>0</li>
                    <li id='four'>0</li>
                    <li id='five'>0</li>
                </ul>
                <ul class='percents'>
                    <li id='one_percent'>0.00%</li>
                    <li id='two_percent'>0.00%</li>
                    <li id='three_percent'>0.00%</li>
                    <li id='four_percent'>0.00%</li>
                    <li id='five_percent'>0.00%</li>
                </ul>
            </div>
            <div class='content-select'>
            	<select id='puntosapuesta'>
            		<option value='10'>10</option>
            		<option value='20'>20</option>
            		<option value='50'>50</option>
                    <option value='100' selected='yes'>100</option>
            		<option value='200'>200</option>
            		<option value='500'>500</option>
                    <option value='1000'>1000</option>
            	</select>
            	<i></i>
            </div>
            <div id='botonesempezar'>
                <button id='empezar'>Jugar</button>
                <button id='empezar10'>x10</button>
            </div>
            <p id='plinkoresultado'></p>
        </div>
        <div id='instrucciones'>
            <div id='headerJuegos'>
                <p id='tituloJuegos'>Instrucciones:</p>
            </div>
            <div class='faq-container'>
                <details open>
                    <summary>Como jugar</summary>
                    <p>Plinko un juego donde la suerte es más que un hecho. Este magnífico juego consiste en una bola roja cayendo y esta bola podrá caer en cinco cubos. Si esta bola cae en el cubo rojo (el más probable) perderemos todo lo apostado, si cae en los cubos naranjas (menos probable) ganaremos el 130% de lo apostado y si finalmente cae en los cubos verdes (el más improbable) ganaremos el doble de lo apostado. Podremos elegir si jugamos bola a bola o si preferimos jugar con 10 bolas a la vez y cada bola jugada de estas será una apuesta. </p>
                </details>
            </div>
        </div>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
        <script src='plinko.js'></script>
    </main>
</body>
</html>";
}
?>
