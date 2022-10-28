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
