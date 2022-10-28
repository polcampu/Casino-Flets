function updatepuntos() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("puntos").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","../php/updatepuntos.php",true);
    xmlhttp.send();
}
updatepuntos();

window.console.log = function(){
  console.error('No puedes ejecutar comandos en la consola.');
  window.console.log = function() {
      return false;
  }
}

const diez = document.getElementById('10');
diez.addEventListener("click", () => {
  document.getElementById("total").innerHTML= "<span style='float:left;'><div class='thin dense'>Valor del depósito</div><div class='thin dense'>IVA 16%</div>TOTAL</span><span style='float:right; text-align:right;'><div class='thin dense'>8.40€</div><div class='thin dense'>1.60€</div>10.00€</span>";
});

const veinte = document.getElementById('20');
veinte.addEventListener("click", () => {
  document.getElementById("total").innerHTML= "<span style='float:left;'><div class='thin dense'>Valor del depósito</div><div class='thin dense'>IVA 16%</div>TOTAL</span><span style='float:right; text-align:right;'><div class='thin dense'>16.80€</div><div class='thin dense'>3.20€</div>20.00€</span>";
});

const cincuenta = document.getElementById('50');
cincuenta.addEventListener("click", () => {
  document.getElementById("total").innerHTML= "<span style='float:left;'><div class='thin dense'>Valor del depósito</div><div class='thin dense'>IVA 16%</div>TOTAL</span><span style='float:right; text-align:right;'><div class='thin dense'>42.00€</div><div class='thin dense'>8.00€</div>50.00€</span>";
});

const cien = document.getElementById('100');
cien.addEventListener("click", () => {
  document.getElementById("total").innerHTML= "<span style='float:left;'><div class='thin dense'>Valor del depósito</div><div class='thin dense'>IVA 16%</div>TOTAL</span><span style='float:right; text-align:right;'><div class='thin dense'>84.00€</div><div class='thin dense'>16.00€</div>100.00€</span>";
});

const pagar = document.getElementById('pagar');
pagar.addEventListener("click", () => {
  alert("Pago realizado.\nPendiente de aprovación.");
});