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
    <link rel='stylesheet' href='../../css/dicegame.css'>
    <title>Flets | Dice game</title>
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
                <p id='tituloJuegos'>Dice Game:</p>
                <a id='faq' href='../../inicio'>&#11013; Volver a juegos</a>
            </div>
            <div class = 'scene'>
                <div class='cube'>
                    <div class='cube__face cube__face--1'>
                        <span class='dot dot1'></span>
                    </div>
                    <div class='cube__face cube__face--2'>
                        <span class='dot dot1'></span>
                        <span class='dot dot2'></span>
                    </div>
                    <div class='cube__face cube__face--3'>
                        <span class='dot dot1'></span>
                        <span class='dot dot2'></span>  
                        <span class='dot dot3'></span>
                    </div>
                    <div class='cube__face cube__face--4'>
                        <span class='dot dot1'></span>
                        <span class='dot dot2'></span>  
                        <span class='dot dot3'></span>
                        <span class='dot dot4'></span>
                    </div>
                    <div class='cube__face cube__face--5'>
                        <span class='dot dot1'></span>
                        <span class='dot dot2'></span>  
                        <span class='dot dot3'></span>
                        <span class='dot dot4'></span>
                        <span class='dot dot5'></span>
                    </div>
                    <div class='cube__face cube__face--6'>
                        <span class='dot dot1'></span>
                        <span class='dot dot2'></span>  
                        <span class='dot dot3'></span>
                        <span class='dot dot4'></span>
                        <span class='dot dot5'></span>
                        <span class='dot dot6'></span>
                    </div>
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
                <button id='1'>1 &#127922;</button>
                <button id='2'>2 &#127922;</button>
                <button id='3'>3 &#127922;</button>
                <button id='4'>4 &#127922;</button>
                <button id='5'>5 &#127922;</button>
                <button id='6'>6 &#127922;</button>
            </div>
            <p id='dicegameresultado'></p>
        </div>
        <div id='instrucciones'>
            <div id='headerJuegos'>
                <p id='tituloJuegos'>Instrucciones:</p>
            </div>
            <div class='faq-container'>
                <details open>
                    <summary>Como jugar</summary>
                    <p>Un dado tiene 6 caras, por lo tanto, 6 posibles opciones a elegir y poder apostar a una de ellas. En este juego apostaremos por una de esas 6 opciones, en caso de que acertemos la cara del dado que sale, nuestras ganancias serán de un 250% de lo apostado y si fallamos perdemos todos los puntos apostados.</p>
                </details>
            </div>
        </div>
    </main>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
    <script src='dicegame.js'></script>
</body>
</html>";
}
?>
