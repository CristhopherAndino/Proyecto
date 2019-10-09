<?php
header('Content-Type: application/json');
include_once('../../claseOfertones.php');
require_once('../../index.php');

$database = new Database();

if($_SERVER['REQUEST_METHOD']=='POST'){
    $o = new ofertones(
        $_POST['nombreE'],
        $_POST['descuento'],
        $_POST['real'],
        $_POST['Oferton'],
        $_POST['fechaF'],
        $_POST['fechaI'],
        $_POST['sucursales'],
        $_POST['foto']
    );
    echo $o->crear($database->getDB());
}
?>