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
            $_POST['seguidore'],
            $_POST['ventas'],
            array(
                'nombre' => $_POST['nombreP'],
                'cantidad' => $_POST['cantidadP'],
                'tiempo' => $_POST['tiempoP'],
            ),
            $_POST['banner'],
            $_POST['logotipo']
        );
        echo $E->crear($database->getDB());
        exit();
    }

    if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])) {
          Empresa::Eliminar($database->getDB(), $_GET['id']);
          exit();   
      }

    if($_SERVER['REQUEST_METHOD'] == 'GET' && !isset($_GET['id'])){
        Empresa::ObtenerEmpresas($database->getDB());
        exit();
    }
    

?>