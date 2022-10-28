var palos = ["c", "d", "p", "t"];
var numAnterior = Math.floor(Math.random() * 7)+4;
var paloAnterior = palos[Math.floor(Math.random()*palos.length)];
var resultado;
var userpoints;
var ganancia;
var jugando = false;
var puntosapuesta;

var src = document.getElementById("highorlow");
var imgAnterior = document.createElement("img");
imgAnterior.src = "images/"+numAnterior+paloAnterior+".png";
imgAnterior.id = "carta";
src.appendChild(imgAnterior);

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

const mayor = document.getElementById('high');
mayor.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta || jugando == true){
        if(jugando == false) {
            userpoints = userpoints - puntosapuesta;
            jugando = true;
            ganancia = puntosapuesta;
            modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
            }, 100);
        }
        var numSiguiente = Math.floor(Math.random() * 13)+1;
        var paloSiguiente = palos[Math.floor(Math.random()*palos.length)];
        if (numAnterior==numSiguiente){
            while (paloAnterior==paloSiguiente) {
                var paloSiguiente = palos[Math.floor(Math.random()*palos.length)];
            }
            resultado = "Ha salido el mismo número, ni ganas ni pierdes. Ganancia: " + ganancia;
        } else if ((numAnterior<numSiguiente)){
            ganancia = ganancia+(puntosapuesta*0.2);
            resultado = "¡Has ganado! Ganancia: " + ganancia;
        } else {
            ganancia = 0;
            resultado = "¡Has perdido! Pierdes los puntos.";
            modifypuntos(userpoints);
            jugando = false;
            setTimeout(function(){
                updatepuntos();
                $("select").attr("disabled", false);
            }, 100);
        }
        document.getElementById("highlowresultado").textContent = resultado;
        document.getElementById("carta").src = "images/"+numSiguiente+paloSiguiente+".png";
        numAnterior = numSiguiente;
        paloAnterior = paloSiguiente;
    }else{
        document.getElementById("highlowresultado").textContent = "¡No tienes puntos suficientes!";
    }
});

const menor = document.getElementById('low');
menor.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta || jugando == true){
        if(jugando == false) {
            userpoints = userpoints - puntosapuesta;
            jugando = true;
            ganancia = puntosapuesta;
            modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
            }, 100);
        }
        var numSiguiente = Math.floor(Math.random() * 13)+1;
        var paloSiguiente = palos[Math.floor(Math.random()*palos.length)];
        if (numAnterior==numSiguiente){
            while (paloAnterior==paloSiguiente) {
                var paloSiguiente = palos[Math.floor(Math.random()*palos.length)];
            }
            resultado = "Ha salido el mismo número, ni ganas ni pierdes. Ganancia: " + ganancia;
        } else if ((numAnterior>numSiguiente)){
            ganancia = ganancia+(puntosapuesta*0.2);
            resultado = "¡Has ganado! Ganancia: " + ganancia;
        } else {
            ganancia = 0;
            resultado = "¡Has perdido! Pierdes los puntos.";
            modifypuntos(userpoints);
            jugando = false;
            setTimeout(function(){
                updatepuntos();
                $("select").attr("disabled", false);
            }, 100);
        }
        document.getElementById("highlowresultado").textContent = resultado;
        document.getElementById("carta").src = "images/"+numSiguiente+paloSiguiente+".png";
        numAnterior = numSiguiente;
        paloAnterior = paloSiguiente;
    }else{
        document.getElementById("highlowresultado").textContent = "¡No tienes puntos suficientes!";
    }
});

const retirar = document.getElementById('retirar');
retirar.addEventListener("click", () => {
    if(ganancia>0){
        jugando = false;
        document.getElementById("highlowresultado").textContent = "Has retirado " + ganancia + " puntos.";
        $("button").attr("disabled", true);
        modifypuntos(userpoints+ganancia);
        setTimeout(function(){
            updatepuntos();
            $("button").attr("disabled", false);
            $("select").attr("disabled", false);
        }, 100);
        ganancia = 0;
    }else{
        document.getElementById("highlowresultado").textContent = "No dispones de ninguna ganancia que retirar";
    }
});

window.console.log = function(){
    console.error('No puedes ejecutar comandos en la consola.');
    window.console.log = function() {
        return false;
    }
}
