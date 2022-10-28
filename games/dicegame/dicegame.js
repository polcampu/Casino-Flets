var cube = document.querySelector('.cube');
var currentClass = '';
var resultat;
var resultatAnterior;
var userpoints;
var puntosapuesta;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function rollDice() {
    var randNum =getRandomInt(1,7)
    while (randNum==resultatAnterior) {
        randNum =getRandomInt(1,7)
    }
    resultat = randNum;
    var showClass = 'show-' + randNum;
    if ( currentClass ) {
        cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
    resultatAnterior = resultat;
}

function updatepuntos() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("puntos").innerHTML = this.responseText;
            userpoints = parseInt(this.responseText);
        }
    };
    xmlhttp.open("GET","../../php/updatepuntos.php",true);
    xmlhttp.send();
}

function modifypuntos(newpoints) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","../../php/modifypuntos.php?points="+newpoints,true);
    xmlhttp.send();
}

function cantidadapostada() {
    var e = document.getElementById("puntosapuesta");
    puntosapuesta = parseInt(e.value);
    $("select").attr("disabled", true);
}

updatepuntos();

// set initial side
rollDice();

const uno = document.getElementById('1');
uno.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        rollDice();
        setTimeout(function(){
            if (resultat == 1){
                document.getElementById("dicegameresultado").textContent = "¡Has ganado!";
                userpoints = userpoints + (puntosapuesta*2.5);
            } else {
                document.getElementById("dicegameresultado").textContent = "¡Has perdido!";
            }
            modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
                $("button").attr("disabled", false);
                $("select").attr("disabled", false);
            }, 100);
        }, 1000);
    }else{
        document.getElementById("dicegameresultado").textContent = "¡No tienes puntos suficientes!";
    }
});

const dos = document.getElementById('2');
dos.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        rollDice();
        setTimeout(function(){
            if (resultat == 2){
                document.getElementById("dicegameresultado").textContent = "¡Has ganado!";
                userpoints = userpoints + (puntosapuesta*2.5);
            } else {
                document.getElementById("dicegameresultado").textContent = "¡Has perdido!";
            }
            modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
                $("button").attr("disabled", false);
                $("select").attr("disabled", false);
            }, 100);
        }, 1000);
    }else{
        document.getElementById("dicegameresultado").textContent = "¡No tienes puntos suficientes!";
    }
});

const tres = document.getElementById('3');
tres.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        rollDice();
        setTimeout(function(){
            if (resultat == 3){
                document.getElementById("dicegameresultado").textContent = "¡Has ganado!";
                userpoints = userpoints + (puntosapuesta*2.5);
            } else {
                document.getElementById("dicegameresultado").textContent = "¡Has perdido!";
            }
            modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
                $("button").attr("disabled", false);
            }, 100);
        }, 1000);
    }else{
        document.getElementById("dicegameresultado").textContent = "¡No tienes puntos suficientes!";
    }
});

const quatre = document.getElementById('4');
quatre.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        rollDice();
        setTimeout(function(){
            if (resultat == 4){
                document.getElementById("dicegameresultado").textContent = "¡Has ganado!";
                userpoints = userpoints + (puntosapuesta*2.5);
            } else {
                document.getElementById("dicegameresultado").textContent = "¡Has perdido!";
            }
            modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
                $("button").attr("disabled", false);
            }, 100);
        }, 1000);
    }else{
        document.getElementById("dicegameresultado").textContent = "¡No tienes puntos suficientes!";
    }
});

const cinc = document.getElementById('5');
cinc.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        rollDice();
        setTimeout(function(){
            if (resultat == 5){
                document.getElementById("dicegameresultado").textContent = "¡Has ganado!";
                userpoints = userpoints + (puntosapuesta*2.5);
            } else {
                document.getElementById("dicegameresultado").textContent = "¡Has perdido!";
            }
            modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
                $("button").attr("disabled", false);
            }, 100);
        }, 1000);
    }else{
        document.getElementById("dicegameresultado").textContent = "¡No tienes puntos suficientes!";
    }
});

const sis = document.getElementById('6');
sis.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        rollDice();
        setTimeout(function(){
            if (resultat == 6){
                document.getElementById("dicegameresultado").textContent = "¡Has ganado!";
                userpoints = userpoints + (puntosapuesta*2.5);
            } else {
                document.getElementById("dicegameresultado").textContent = "¡Has perdido!";
            }
            modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
                $("button").attr("disabled", false);
            }, 100);
        }, 1000);
    }else{
        document.getElementById("dicegameresultado").textContent = "¡No tienes puntos suficientes!";
    }
});

window.console.log = function(){
    console.error('No puedes ejecutar comandos en la consola.');
    window.console.log = function() {
        return false;
    }
}