<?php
header('Content-Type: application/json');
include_once('../../controladorEmpresa.php');
require_once('../../index.php');

$database = new Database();

if($_SERVER['REQUEST_METHOD'] ==  'PUT' && isset($_GET['id'] && isset($_FILES['file'])){
    $_PUT = array();
        if($_SERVER['REQUEST_METHOD'] == 'PUT')
        parse_str(file_get_contents("php://input"), $_PUT);

    $file = $_FILES["file"];
    $nombre = $file["name"];
    $rP = $file["tmp_name"];
    $carpeta = "../../../imagenes/perfil/empresas";
    $src = $carpeta.$nombre;
    move_uploaded_file($rP,$src);
    $E = new Empresa(
        $_PUT['nombreE'],
        $_PUT['nombreE'],
        $_PUT['precioP'],
        $_PUT[$src],
        $_PUT['informacionP'],
        $_PUT['fechaI'],
        $_PUT['comentariosP']
    );

    echo $E->banner($database->getDB(), $_GET['id']);
    exit();

}
?>