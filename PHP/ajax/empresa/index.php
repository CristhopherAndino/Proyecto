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
            $_POST['cContraseña'],
            array(
                'nombre' => $_POST['nombreP'],
                'cantidad' => $_POST['cantidadP'],
                'tiempo' => $_POST['tiempoP']
            )
        );
        echo $E->crear($database->getDB());
        exit();
    }

    if($_SERVER['REQUEST_METHOD'] == 'GET' && !isset($_GET['id'])){
        Empresa::ObtenerEmpresas($database->getDB());
        exit();

    }
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])) {
        Empresa::ObtenerEmpresa($database->getDB(), $_GET['id']);
        exit();
    }

    if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])) {
        Empresa::Eliminar($database->getDB(), $_GET['id']);
        exit();   
    }

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