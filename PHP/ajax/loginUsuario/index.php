<?php
header('Content-Type: application/json');
include_once('../../loginUsuario.php');
require_once('../../index.php');

$database = new Database();

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['accion']) && $_GET['accion']=='login'){
    LoginUsuario::login($_POST['correo'], $_POST['contrasena'] ,$database->getDB());
    exit();
}
?>