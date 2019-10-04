<?php
    header('Content-Type: application/json');
    include_once('../../claseRegistroEmpresa.php');
    require_once('../../index.php');

    $database = new Database();
  
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $E = new Empresa(
            $_POST['nombre'],
            $_POST['pais'],
            $_POST['dirreccion'],
            $_POST['latitud'],
            $_POST['longitud'],
            $_POST['facebook'],
            $_POST['instagram'],
            $_POST['twitter'],
            $_POST['telefono'],
            $_POST['correo'],
            $_POST['contraseña'],
            $_POST['cContraseña']
        );
        echo $E->crear($database->getDB());
    }

    if($_SERVER['REQUEST_METHOD'] == 'GET' && !isset($_GET['id'])){
        Empresa::ObtenerEmpresas($database->getDB());

    }
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])) {
        Empresa::ObtenerEmpresa($database->getDB(), $_GET['id']);
    }

    if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])) {
        Empresa::Eliminar($database->getDB(), $_GET['id']);   
    }

    if ($_SERVER['REQUEST_METHOD'] == 'PUT' && isset($_GET['id'])) {
        $_PUT = array();
        if ($_SERVER['REQUEST_METHOD'] == 'PUT') 
        parse_str(file_get_contents("php://input"),$_PUT);
        
        $E = new Empresa(
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
            $_PUT['cContraseña']
        );

        echo $E->acualizar($database->getDB(), $_GET['id']);
    }
?>