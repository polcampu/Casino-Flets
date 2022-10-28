var userpoints;
var puntosapuesta;
var rotationsTime = 8;
var wheelSpinTime = 6;
var ballSpinTime = 5;
var numorder = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
var numred = [32,19,21,25,34,27,36,30,23,5,16,1,14,9,18,7,12,3];
var numblack = [15,4,2,17,6,13,11,8,10,24,33,20,31,22,29,28,35,26];
var numgreen = [0];
var numbg = $(".pieContainer");
var ballbg = $(".ball");
var toppart = $("#toppart");
var pfx = $.keyframe.getVendorPrefix();
var transform = pfx + "transform";
var rinner = $("#rcircle");
var numberLoc = [];
$.keyframe.debug = true;

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

createWheel();
function createWheel() {
  var temparc = 360 / numorder.length;
  for (var i = 0; i < numorder.length; i++) {
    numberLoc[numorder[i]] = [];
    numberLoc[numorder[i]][0] = i * temparc;
    numberLoc[numorder[i]][1] = i * temparc + temparc;

    newSlice = document.createElement("div");
    $(newSlice).addClass("hold");
    newHold = document.createElement("div");
    $(newHold).addClass("pie");
    newNumber = document.createElement("div");
    $(newNumber).addClass("num");

    newNumber.innerHTML = numorder[i];
    $(newSlice).attr("id", "rSlice" + i);
    $(newSlice).css(
      "transform",
      "rotate(" + numberLoc[numorder[i]][0] + "deg)"
    );

    $(newHold).css("transform", "rotate(9.73deg)");
    $(newHold).css("-webkit-transform", "rotate(9.73deg)");

    if ($.inArray(numorder[i], numgreen) > -1) {
      $(newHold).addClass("greenbg");
    } else if ($.inArray(numorder[i], numred) > -1) {
      $(newHold).addClass("redbg");
    } else if ($.inArray(numorder[i], numblack) > -1) {
      $(newHold).addClass("greybg");
    }

    $(newNumber).appendTo(newSlice);
    $(newHold).appendTo(newSlice);
    $(newSlice).appendTo(rinner);
  }
}

function resetAni() {
  animationPlayState = "animation-play-state";
  playStateRunning = "running";

  $(ballbg)
    .css(pfx + animationPlayState, playStateRunning)
    .css(pfx + "animation", "none");

  $(numbg)
    .css(pfx + animationPlayState, playStateRunning)
    .css(pfx + "animation", "none");
  $(toppart)
    .css(pfx + animationPlayState, playStateRunning)
    .css(pfx + "animation", "none");

  $("#rotate2").html("");
  $("#rotate").html("");
}

function spinTo(num) {
  var temp = numberLoc[num][0] + 4;

  var rndSpace = Math.floor(Math.random() * 360 + 1);

  resetAni();
  setTimeout(function() {
    bgrotateTo(rndSpace);
    ballrotateTo(rndSpace + temp);
  }, 500);
}

function ballrotateTo(deg) {
  var temptime = rotationsTime + 's';
  var dest = -360 * ballSpinTime - (360 - deg);
  $.keyframe.define({
    name: "rotate2",
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(" + dest + "deg)"
    }
  });

  $(ballbg).playKeyframe({
    name: "rotate2",
    duration: temptime,
    timingFunction: "ease-in-out",
    });
}

function bgrotateTo(deg) {
  var dest = 360 * wheelSpinTime + deg;
  var temptime = (rotationsTime * 1000 - 1000) / 1000 + 's';

  $.keyframe.define({
    name: "rotate",
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(" + dest + "deg)"
    }
  });

  $(numbg).playKeyframe({
    name: "rotate",
    duration: temptime,
    timingFunction: "ease-in-out",
    complete: function() {}
  });

  $(toppart).playKeyframe({
    name: "rotate",
    duration: temptime,
    timingFunction: "ease-in-out",
    complete: function() {}
  });
}

const verde = document.getElementById('verde');
verde.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
            }, 100);
        var rndNum = Math.floor(Math.random() * 34 + 0);
        spinTo(rndNum);
        setTimeout(function(){
            if (rndNum == 0){
                setTimeout(function(){
                    document.getElementById("rouletteresultado").textContent = "¡Has ganado!";
                    userpoints = userpoints + (puntosapuesta*36);
                }, 7500);
            } else {
                setTimeout(function(){
                    document.getElementById("rouletteresultado").textContent = "¡Has perdido!";
                }, 7500);
            }
            setTimeout(function(){
                modifypuntos(userpoints);
                setTimeout(function(){
                    updatepuntos();
                    $("button").attr("disabled", false);
                    $("select").attr("disabled", false);
                }, 100);
            }, 7500);
        }, 1000);
    }else{
      document.getElementById("rouletteresultado").textContent = "¡No tienes puntos suficientes!";
      setTimeout(function(){
        $("button").attr("disabled", false);
        $("select").attr("disabled", false);
      }, 100);
    }
});

const rojo = document.getElementById('rojo');
rojo.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
            }, 100);
        var rndNum = Math.floor(Math.random() * 34 + 0);
        spinTo(rndNum);
        setTimeout(function(){
            if (rndNum == 0){
                setTimeout(function(){
                  document.getElementById("rouletteresultado").textContent = "¡Has perdido!";
              }, 7500);
            } else {
              for (i = 0; i<numred.length; i++){
                if (numred[i] == rndNum){
                  setTimeout(function(){
                    document.getElementById("rouletteresultado").textContent = "¡Has ganado!";
                    userpoints = userpoints + (puntosapuesta*2);
                  }, 7500);
                } else if (numblack[i] == rndNum){
                  setTimeout(function(){
                    document.getElementById("rouletteresultado").textContent = "¡Has perdido!";
                  }, 7500);
                }
              }
            }
            setTimeout(function(){
                modifypuntos(userpoints);
                setTimeout(function(){
                    updatepuntos();
                    $("button").attr("disabled", false);
                    $("select").attr("disabled", false);
                }, 100);
            }, 7500);
        }, 1000);
    }else{
      document.getElementById("rouletteresultado").textContent = "¡No tienes puntos suficientes!";
      setTimeout(function(){
        $("button").attr("disabled", false);
        $("select").attr("disabled", false);
      }, 100);
    }
});

const negro = document.getElementById('negro');
negro.addEventListener("click", () => {
    cantidadapostada()
    if(userpoints>=puntosapuesta){
        $("button").attr("disabled", true);
        userpoints = userpoints - puntosapuesta;
        modifypuntos(userpoints);
            setTimeout(function(){
                updatepuntos();
            }, 100);
        var rndNum = Math.floor(Math.random() * 34 + 0);
        spinTo(rndNum);
        setTimeout(function(){
            if (rndNum == 0){
                setTimeout(function(){
                  document.getElementById("rouletteresultado").textContent = "¡Has perdido!";
              }, 7500);
            } else {
              for (i = 0; i<numred.length; i++){
                if (numblack[i] == rndNum){
                  setTimeout(function(){
                    document.getElementById("rouletteresultado").textContent = "¡Has ganado!";
                    userpoints = userpoints + (puntosapuesta*2);
                  }, 7500);
                } else if (numred[i] == rndNum){
                  setTimeout(function(){
                    document.getElementById("rouletteresultado").textContent = "¡Has perdido!";
                  }, 7500);
                }
              }
            }
            setTimeout(function(){
                modifypuntos(userpoints);
                setTimeout(function(){
                    updatepuntos();
                    $("button").attr("disabled", false);
                    $("select").attr("disabled", false);
                }, 100);
            }, 7500);
        }, 1000);
    }else{
      document.getElementById("rouletteresultado").textContent = "¡No tienes puntos suficientes!";
      setTimeout(function(){
        $("button").attr("disabled", false);
        $("select").attr("disabled", false);
      }, 100);
    }
});