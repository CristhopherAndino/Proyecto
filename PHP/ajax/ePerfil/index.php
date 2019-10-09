<?php
header('Content-Type: application/json');
include_once('../../claseRegistroEmpresa.php');
require_once('../../index.php');

$database = new Database();

if ($_SERVER['REQUEST_METHOD'] == 'PUT' && isset($_GET['id'])) {
    $_PUT = array();
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') 
    parse_str(file_get_contents("php://input"),$_PUT);
    
    $EPE = new Empresa(
        $_PUT['nombre'],
            $_PUT['pais'],
            $_PUT['dirreccion'],
            $_PUT['latitud'],
            $_PUT['longitud'],
            $_PUT['facebook'],
            $_PUT['instagram'],
            $_PUT['twitter'],
            $_PUT['telefono'],
            $_PUT['correo'],
            $_PUT['contraseña'],
            $_PUT['cContraseña'],
            $_PUT['seguidore'],
            $_PUT['ventas'],
            $_PUT['banner'],
            $_PUT['logotipo'],
        array(
            'nombre' => $_PUT['nombreP'],
            'cantidad' => $_PUT['cantidadP'],
            'tiempo' => $_PUT['tiempoP']
        )
    );
    $EPE->editarPerfilE($database->getDB(),$_GET['id']);
}
?>