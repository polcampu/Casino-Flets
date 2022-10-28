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
    <link rel='stylesheet' href='../../css/highlow.css'>
    <title>Flets | Higher or Lower</title>
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
                <p id='tituloJuegos'>Higher or Lower:</p>
                <a id='faq' href='../../inicio'>&#11013; Volver a juegos</a>
            </div>
            <div id='highorlow'>
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
            <button id='high'>&#11014; High</button>
            <button id='low'>&#11015; Low</button>
            <button id='retirar'>Retirar</button>
            <p id='highlowresultado'></p>
        </div>
        <div id='instrucciones'>
            <div id='headerJuegos'>
                <p id='tituloJuegos'>Instrucciones:</p>
            </div>
            <div class='faq-container'>
                <details open>
                    <summary>Como jugar</summary>
                    <p>Tenemos dos opciones 'High' (alta) y 'Low' (baja), si presionamos el boton high apostaremos a que la próxima carta sea más alta que la anterior y en caso que presionemos el boton low apostaremos a que la próxima carta sea más baja que la anteior. En caso de que ganemos una apuesta, podremos seguir jugando o retirar los puntos ganados, si segimos jugando ganaremos un 20% de los puntos apostados por cada acierto y si fallamos perderemos todos los puntos no retirados.</p>
                </details>
            </div>
        </div>
    </main>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
    <script src='highlow.js'></script>
</body>
</html>";
}
?> 
