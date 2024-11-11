<?php
header('Content-Type: application/json');
include("dbcontext.php");

if($_POST['lista'] == "todos"){
    $con = conectar();
    $sql = "SELECT * FROM estados";
    $rs = $con->query($sql);
    $estados = [];
    while($row = $rs->fetch_assoc())
        $estados[] = $row;
    echo json_encode($estados);
}

if($_POST['ADD'] == "estado"){
    $nombreEstado = $_POST['nombre'];
    try {
        $con = conectar();
        $sql = "INSERT INTO estados(nombre) VALUES(?)";
        $stmt = $con->prepare($sql);
        $stmt->bind_param("s", $nombreEstado);
        $stmt->execute();
        echo json_encode(array('estado' => 'Estado Agregado!!'));
    } catch (Exception $e) {
        echo json_encode(array('estado' => $e->getMessage()));
    }
}

if($_POST["DELETE"] == "estado"){
    try {
        $con = conectar();
        $sql = "DELETE FROM estados WHERE nombre = ?";
        $stmt = $con->prepare($sql);
        $stmt->bind_param("s", $_POST['nombre']);
        $stmt->execute();
        if($stmt->affected_rows > 0)
            echo json_encode(array("estado" => "Estado eliminado!!"));
        else
            echo json_encode(array("estado" => "Estado no Existe!!"));
    } catch (Exception $e) {
        echo json_encode(array("estado" => "error en el sql"));
    }
}

if($_POST["UPDATE"] == "estado"){
    $con = conectar();
    try {
        $sql = "UPDATE estados SET nombre = ? WHERE idestado = ?";
        $stmt = $con->prepare($sql);
        $stmt->bind_param("si", $_POST['nombre'], $_POST['idEstado']);
        $stmt->execute();
        if($stmt->affected_rows > 0)
            echo json_encode(array("estado" => "Estado Actualizado!!"));
        else
            echo json_encode(array("estado" => "Estado no Existe!!"));
    } catch (Exception $e) {
        echo json_encode(array("estado" => "Error en el sql"));
    }
}
?>
