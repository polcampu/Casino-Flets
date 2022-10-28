<?php

    include 'conexion.php';
	session_start();

    $user = $_POST["usuario"];
    $pass = $_POST["contraseña"];

    $query = mysqli_query($conn,"SELECT * FROM register WHERE usuario = '".$user."' and contraseña = '".$pass."'");
    
    $ejecutar = mysqli_num_rows($query);

    if ($ejecutar==1)
    {
        $_SESSION['usuario'] = $user;
        $row = mysqli_fetch_assoc($query);

        echo '
            <script>
                window.location = "../inicio"
            </script>
            ';
    }
    else if ($ejecutar == 0)
    {
        echo '
        <script>
            alert("Error al iniciar sesión, intentelo otra vez");
            window.location = "../login";
        </script>
        ';
    }
    
?>
