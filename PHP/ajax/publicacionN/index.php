<?php
header('Content-Type: application/json');
include_once('../../clasePublicacion.php');
require_once('../../index.php');

$database = new Database();

if($_SERVER['REQUEST_METHOD']=='POST'){
    $E = new Publicidad(
        $_POST['nombreP'],
        $_POST['nombreE'],
        $_POST['precioP'],
        $_POST['fotoP'],
        $_POST['informacionP'],
        $_POST['comentariosP']
        
    );
    echo $E->crear($database->getDB());
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT' && isset($_GET['id'])) {
    $_PUT = array();
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') 
    parse_str(file_get_contents("php://input"),$_PUT);
    
    $E = new Publicidad(
        $_PUT['nombreP'],
        $_PUT['nombreE'],
        $_PUT['precioP'],
        $_PUT['fotoP'],
        $_PUT['informacionP'],
        $_PUT['comentariosP']
        
    );

    $E->agregarComentario($database->getDB(),$_GET['id']);
}
?>