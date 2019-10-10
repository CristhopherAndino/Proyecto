<?php
header('Content-Type: application/json');
include_once('../../claseSucursales.php');
require_once('../../index.php');

$database = new Database();

if($_SERVER['REQUEST_METHOD']=='POST'){
    $E = new sucursales(
        $_POST['nombreE'],
        $_POST['nombre'],
        $_POST['latitud'],
        $_POST['longitud'],
        $_POST['contrasenaE']
        );
    echo $E->crear($database->getDB());
    exit();
}

if($_SERVER['REQUEST_METHOD'] == 'GET' && !isset($_GET['id'])){
    sucursales::ObtenerUsuarios($database->getDB());
} 

?>