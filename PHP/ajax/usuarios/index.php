 <?php
    header('Content-Type: application/json');
    include_once('../../claseRegistroUsuarios.php');
    require_once('../../index.php');

    $database = new Database();
  
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $u = new Usuarios(
            $_POST['nombre'],
            $_POST['apellido'],
            $_POST['fecha'],
            $_POST['genero'],
            $_POST['pais'],
            $_POST['correo'],
            $_POST['contrasena'],
            $_POST['cContrasena']
        );
        echo $u->crear($database->getDB());
    }

    if($_SERVER['REQUEST_METHOD'] == 'GET' && !isset($_GET['id'])){
        Usuarios::ObtenerUsuarios($database->getDB());
    } 

    if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])){
        Usuarios::ObtenerUsuario($database->getDB(),$_GET['id']);
    }

    if($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])){
        Usuarios::eliminar($database->getDB(),$_GET['id']);
    }

    if($_SERVER['REQUEST_METHOD'] == 'PUT' && isset($_GET['id'])){
        $_PUT = array();
        if($_SERVER['REQUEST_METHOD'] == 'PUT')
        parse_str(file_get_contents("php://input"), $_PUT);

        $u = new Usuarios(
            $_PUT['nombre'],
            $_PUT['apellido'],
            $_PUT['fecha'],
            $_PUT['genero'],
            $_PUT['pais'],
            $_PUT['correo'],
            $_PUT['contrasena'],
            $_PUT['cContrasena']
        );
        echo $u->actualizar($database->getDB(), $_GET['id']);
    }

?>