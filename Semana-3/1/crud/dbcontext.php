<?php
function conectar() {
    $host = "127.0.0.1";
    $user = "root";
    $pass = "1234567890";
    $db = "iceppracticas";
    
    // Hacemos la conexión
    $conn = new mysqli($host, $user, $pass, $db);
    
    // Validamos la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }
    
    // Establecemos el conjunto de caracteres a UTF-8
    $conn->set_charset("utf8");

    return $conn;
}
?>
