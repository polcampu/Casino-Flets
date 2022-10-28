<?php    

    include 'conexion.php';

    $name = $_POST["nombre"];
    $surname = $_POST["apellidos"];
    $date = $_POST["fecha"];
    $dni = $_POST["dni"];
    $user = $_POST["usuario"];
    $email = $_POST["correo"];
    $pass = $_POST["contraseña"];
	
	$u = mysqli_query($conn,"SELECT * FROM register WHERE usuario = '".$user."'");
	$c = mysqli_query($conn,"SELECT * FROM register WHERE correo = '".$email."'");
	$d = mysqli_query($conn,"SELECT * FROM register WHERE dni = '".$dni."'");
	  
	$ejecutarUser = mysqli_num_rows($u);
	$ejecutarCorreo = mysqli_num_rows($c);
	$ejecutarDni = mysqli_num_rows($d);
    
    if($ejecutarUser) {
        echo  
            '<script>
                alert("Este usuario ya esta registrado, ingresa otro");
                window.location = "../register";
            </script>';
    } elseif($ejecutarCorreo) {
        echo  
            '<script>
                alert("Este correo ya esta registrado, ingresa otro");
                window.location = "../register";
            </script>';
    } elseif($ejecutarDni) {
        echo  
            '<script>
                alert("Este dni ya esta registrado, ingresa otro");
                window.location = "../register";
            </script>';
   } elseif (!($ejecutarCorreo || $ejecutarUser || $ejecutarDni) ) {
		$query = "INSERT INTO register(nombre, apellidos, fecha, dni, usuario, correo, contraseña) VALUES('$name', '$surname', '$date', '$dni', '$user', '$email', '$pass')";
		$ejecutar = mysqli_query($conn, $query);
        echo 
	    '<script>
                window.location = "../login"
                alert("Usuario registrado correctamente");
            </script>';
   } else {
        echo 
	    '<script>
                alert("Error en el registro, intentelo otra vez");
                window.location = "../register";
            </script>';
    }

        mysqli_close($conn);

?>

