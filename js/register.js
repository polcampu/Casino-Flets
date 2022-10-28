const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const usuario = document.getElementById('usuario');
const correo = document.getElementById('correo');
const dni = document.getElementById('dni');
const fecha = document.getElementById('fecha');
const contraseña = document.getElementById('contraseña');
const form = document.getElementById('form');  


let error = correo;
while ((error = error.nextSibling).nodeType != 1);
let error1 = nombre;
while ((error1 = error1.nextSibling).nodeType != 1);
let error2 = apellidos;
while ((error2 = error2.nextSibling).nodeType != 1);
let error3 = usuario;
while ((error3 = error3.nextSibling).nodeType != 1);
let error4 = dni;
while ((error4 = error4.nextSibling).nodeType != 1);
let error5 = contraseña;
while ((error5 = error5.nextSibling).nodeType != 1);
let error6 = fecha;
while ((error6 = error6.nextSibling).nodeType != 1);




const nombreRegExp = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const apellidosRegExp = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü]+[ ]+[a-zA-ZÑñÁáÉéÍíÓóÚúÜü]+$/;
const usuarioRegExp = /^\w{3,}$/;
const correoRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const contraseñaRegExp = /^\w{5,}$/;

function calcularEdad(fecha1) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha1);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }

  return edad;
}
function validateDNI(dni1) {
  var numero, let1, letra;
  var expresion_regular_dni1 = /^[XYZ]?\d{5,8}[A-Z]$/;

  dni1 = dni1.toUpperCase();

  if(expresion_regular_dni1.test(dni1) === true){
      numero = dni1.substr(0,dni1.length-1);
      numero = numero.replace('X', 0);
      numero = numero.replace('Y', 1);
      numero = numero.replace('Z', 2);
      let1 = dni1.substr(dni1.length-1, 1);
      numero = numero % 23;
      letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letra.substring(numero, numero+1);
      if (letra != let1) {
          return false;
      }else{
          return true;
      }
  }else{
      return false;
  }
}


function addEvent(element, event, callback) {
  let previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    const output = callback(e);
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

addEvent(correo, "input", function () {
  const test = correo.value.length === 0 || correoRegExp.test(correo.value);
  if (test) {
    correo.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    correo.className = "invalid";
  }
});

addEvent(nombre, "input", function () {
  const test = nombre.value.length === 0 || nombreRegExp.test(nombre.value);
  if (test) {
    nombre.className = "valid";
    error1.innerHTML = "";
    error1.className = "error";
  } else {
    nombre.className = "invalid";
  }
});

addEvent(apellidos, "input", function () {
  const test = apellidos.value.length === 0 || apellidosRegExp.test(apellidos.value);
  if (test) {
    apellidos.className = "valid";
    error2.innerHTML = "";
    error2.className = "error";
  } else {
    apellidos.className = "invalid";
  }
});

addEvent(usuario, "input", function () {
  const test = usuario.value.length === 0 || usuarioRegExp.test(usuario.value);
  if (test) {
    usuario.className = "valid";
    error3.innerHTML = "";
    error3.className = "error";
  } else {
    usuario.className = "invalid";
  }
});

addEvent(dni, "input", function () {
  if (validateDNI(dni.value)) {
    dni.className = "valid";
    error4.innerHTML = "";
    error4.className = "error";
  } else {
    dni.className = "invalid";
  }
});

addEvent(contraseña, "input", function () {
  const test = contraseña.value.length === 0 || contraseñaRegExp.test(contraseña.value);
  if (test) {
    contraseña.className = "valid";
    error5.innerHTML = "";
    error5.className = "error";
  } else {
    contraseña.className = "invalid";
  }
});

addEvent(fecha, "input", function () {
  const test = calcularEdad(fecha.value)<18;
  if (!test) {
    fecha.className = "valid";
    error6.innerHTML = "";
    error6.className = "error";
  } else {
    fecha.className = "invalid";
  }
});



addEvent(form, "submit", function () {
  const test = nombre.value.length === 0 || nombreRegExp.test(nombre.value);
  const test1 = apellidos.value.length === 0 || apellidosRegExp.test(apellidos.value);
  const test3 = usuario.value.length === 0 || usuarioRegExp.test(usuario.value);
  const test4 = correo.value.length === 0 || correoRegExp.test(correo.value);
  const test5 = contraseña.value.length === 0 || contraseñaRegExp.test(contraseña.value);
  const test6 = calcularEdad(fecha.value)<18;

  if (!test) {
    nombre.className = "invalid";
    error1.innerHTML = "Solo estan permitidas letras";
    error1.className = "error active";
    return false;

  }

  else {
    nombre.className = "valid";
    error1.innerHTML = "";
    error1.className = "error";
  }

  if (!test1) {
    apellidos.className = "invalid";
    error2.innerHTML = "Solo estan permitidas letras y dos apellidos";
    error2.className = "error active";
    return false;

  }

  else {
    apellidos.className = "valid";
    error2.innerHTML = "";
    error2.className = "error";
  }

  if (test6) {
    fecha.className = "invalid";
    error6.innerHTML = "Tienes que tener mínimo 18 años para registarte";
    error6.className = "error active";
    return false;

  }

  else {
    fecha.className = "valid";
    error6.innerHTML = "";
    error6.className = "error";
  }

  if (!validateDNI(dni.value)) {
    dni.className = "invalid";
    error4.innerHTML = "Este dni no es correcto";
    error4.className = "error active";
    return false;

  }

  else {
    dni.className = "valid";
    error4.innerHTML = "";
    error4.className = "error";
  }

  if (!test3) {
    usuario.className = "invalid";
    error3.innerHTML = "Mínimo 3 caracteres (solo esta permitido letras y numeros)";
    error3.className = "error active";
    return false;

  }

  else {
    usuario.className = "valid";
    error3.innerHTML = "";
    error3.className = "error";
  }

  if (!test4) {
    correo.className = "invalid";
    error.innerHTML = "Formato correo incorrecto";
    error.className = "error active";
    return false;

  }

  else {
    correo.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }

  if (!test5) {
    contraseña.className = "invalid";
    error5.innerHTML = "Mínimo 5 caracteres (solo estan permitidas letras y numeros)";
    error5.className = "error active";
    return false;

  }
  
  else {
    contraseña.className = "valid";
    error5.innerHTML = "";
    error5.className = "error";
  }
});

contraseña.addEventListener('keyup', function (e) {
  if (e.getModifierState('CapsLock')) {
      error5.textContent = 'Mayúsculas activadas';
  } else {
      error5.textContent = '';
  }
});





	 

