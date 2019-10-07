<?php
header('Content-Type: application/json');
include_once('../../claseRegistroEmpresa.php');
require_once('../../index.php');

$database = new Database();

if($_POST['REQUEST_METHOD'] == 'POST'){
    $p = new Publicacion(
        $publicacion = array(
            'nombreP' => $_POST['nombreP'],
         'keyE' => $_POST['keyE'],
         'precioP' => $_POST['precioP'],
         'fotoP'=> $_POST['fotoP'],
         'informacionP' => $_POST['informacionP'],
         'comentariosP' => $_POST['comentariosP']

        )
    );

    echo $p->crear($database->getDB());
    exit();
}
?>