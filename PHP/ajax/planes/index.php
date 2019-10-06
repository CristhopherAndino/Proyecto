<?php
header('Content-Type: application/json');
include_once('../../clasePlan.php');
require_once('../../index.php');

$database = new Database();

if($_SERVER['REQUEST_METHOD']=='POST'){
    $plan = new Plan(
        $_POST['nombreCPl'],
        $_POST['cantidadCPl'],
        $_POST['tiempoCPl']
    );
    echo $plan->crear($database->getDB());
    exit();
}

if($_SERVER['REQUEST_METHOD'] == 'GET' && !isset($_GET['id'])){
    Plan::ObtenerPlanes($database->getDB());
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['id'])){
    Plan::eliminar($database->getDB(), $_GET['id'] );
}
?>