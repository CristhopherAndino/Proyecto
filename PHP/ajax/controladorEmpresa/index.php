<?php
header('Content-Type: application/json');
include_once('../../controladorEmpresa.php');
require_once('../../index.php');

$database = new Database();


//if($_SERVER['REQUEST_METHOD'] == 'GET' && !isset($_GET['id'])){
//    Empresa::ObtenerEmpresas($database->getDB());
  //  exit();

//}
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])) {
    controladoE::ObtenerEmpresa($database->getDB(), $_GET['id']);
    exit();
}

//if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])) {
  //  Empresa::Eliminar($database->getDB(), $_GET['id']);
    //exit();   
//}

if ($_SERVER['REQUEST_METHOD'] == 'PUT' && isset($_GET['id'])) {
    $_PUT = array();
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') 
    parse_str(file_get_contents("php://input"),$_PUT);
    
    $E = new Empresa(
        $_PUT['nombreE'],
        $_PUT['paisE'],
        $_PUT['dirreccionE'],
        $_PUT['latitudE'],
        $_PUT['longitudE'],
        $_PUT['facebookE'],
        $_PUT['instagramE'],
        $_PUT['twitterE'],
        $_PUT['telefonoE'],
        $_PUT['correoE'],
        $_PUT['contraseñaE'],
        $_PUT['cContraseñaE'],
        $_PUT['seguidore'],
        $_PUT['ventas'],
        array(
            'nombre' => $_PUT['nombreP'],
            'cantidad' => $_PUT['cantidadP'],
            'tiempo' => $_PUT['tiempoP']
        )
    );

    echo $E->acualizar($database->getDB(), $_GET['id']);
    exit();
}
?>