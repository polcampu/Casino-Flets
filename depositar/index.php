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
    <link rel='stylesheet' href='../css/depositar.css'>
    <title>Flets | Depositar</title>
    <link rel='icon' type='image/png' href='../images/Flets.png'>
</head>
<body>
    <header>
        <a href='../inicio'><img src='../images/Flets.png' alt='Logo Flets'></a>
        <div>
            <a id='usuario'>$user</a>
            <a id='puntos'></a>
            <a id='logout' href='../php/logout.php'>Salir</a>
        </div>
    </header>
    <main>
        <div id='listaJuegos'>
            <div id='headerJuegos'>
                <p id='tituloJuegos'>Depositar:</p>
                <a id='faq' href='../inicio'>&#11013; Volver a juegos</a>
            </div>
            <div id='lista'>
                <div class='window'>
                    <div class='order-info'>
                        <div class='order-info-content'>
                            <h2>Cantidad del depósito</h2>
                            <div class='line'></div>
                            <table class='order-table'>
                            <tbody>
                                <tr>
                                <td><button class='cantidad' id='10'>1000 Puntos</button></img>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div class='price'>10.00€</div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <div class='line'></div>
                            <table class='order-table'>
                            <tbody>
                                <tr>
                                <td><button class='cantidad' id='20'>2000 Puntos</button></img>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div class='price'>20.00€</div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <div class='line'></div>
                            <table class='order-table'>
                            <tbody>
                                <tr>
                                <td><button class='cantidad' id='50'>5000 Puntos</button></img>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div class='price'>50.00€</div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <div class='line'></div>
                            <table class='order-table'>
                            <tbody>
                                <tr>
                                <td><button class='cantidad' id='100'>10000 Puntos</button></img>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    <div class='price'>100.00€</div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <div class='line'></div>
                            <div class='total' id='total'>
                                <span style='float:left;'>
                                <div class='thin dense'>Valor del depósito</div>
                                <div class='thin dense'>IVA 16%</div>
                                TOTAL
                                </span>
                                    <span style='float:right; text-align:right;'>
                                    <div class='thin dense'>0.00€</div>
                                    <div class='thin dense'>0.00€</div>
                                    0.00€
                                </span>
                            </div>
                        </div>
                    </div>
                        <div class='credit-info'>
                            <div class='credit-info-content'>
                                <div id='detallestarjeta'><h2>Detalles de la tarjeta</h2></div>
                                Número de tarjeta
                                <input class='input-field'></input>
                                Nombre
                                <input class='input-field'></input>
                                <table class='half-input-table'>
                                <tr>
                                    <td> Fecha
                                    <input class='input-field'></input>
                                    </td>
                                    <td>CVV
                                    <input class='input-field'></input>
                                    </td>
                                </tr>
                                </table>
                                <button class='pay-btn' id='pagar'>Realizar depósito</button>
                            </div>
                        </div>
                </div>   
            </div>
        </div>
    </main>
    <script src='../js/depositar.js'></script>
</body>
</html>";
}
?>

