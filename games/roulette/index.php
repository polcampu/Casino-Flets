<!DOCTYPE html>
<?php

session_start();
$user =  $_SESSION['usuario'];

if(!isset($user)){
    header("location: ../../php/login.php");
}else{

echo "
<html>
<head>
    <meta charset='UTF-8'/>
    <link rel='stylesheet' href='../../css/roulette.css'>
    <title>Flets | Roulette</title>
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
                <p id='tituloJuegos'>Roulette:</p>
                <a id='faq' href='../../inicio'>&#11013; Volver a juegos</a>
            </div>
            <div class='spinner'>
                <div class='ball'><span></span></div>
                <div class='platebg'></div>
                <div class='platetop'></div>
                <div id='toppart' class='topnodebox'>
                    <div class='silvernode'></div>
                    <div class='topnode silverbg'></div>
                    <span class='top silverbg'></span>
                    <span class='right silverbg'></span>
                    <span class='down silverbg'></span>
                    <span class='left silverbg'></span>
                </div>
                <div id='rcircle' class='pieContainer'>
                    <div class='pieBackground'></div>
                </div>
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
            <div id='botones'>
                <button id='rojo'>Rojo</button>
                <button id='verde'>Verde</button>
                <button id='negro'>Negro</button>
            </div>
            <p id='rouletteresultado'></p>
        </div>
        <div id='instrucciones'>
            <div id='headerJuegos'>
                <p id='tituloJuegos'>Instrucciones:</p>
            </div>
            <div class='faq-container'>
                <details open>
                    <summary>Como jugar</summary>
                    <p>La Roulette un clásico de los casinos donde una bola puede caer en 36 números más el 0, en nuestra Roulette solo podemos elegir entre tres opciones: que la bola caiga en color verde (ganas lo apostado por 36), el color rojo (ganas el doble) y el color negro (ganas el doble). </br> En el caso que no aciertes, pierdes lo apostado.</p>
                </details>
            </div>
        </div>
    </main>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
    <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/138980/jquery.keyframes.min.js'></script>
    <script src='roulette.js'></script>
</body>
</html>";
}
?>
