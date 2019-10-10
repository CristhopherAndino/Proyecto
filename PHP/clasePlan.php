<?php
class Plan{
    private $nombre;
    private $cantidad;
    private $tiempo;

    public function __construct(
        $nombre,
        $cantidad,
        $tiempo
    ){
        $this->nombre = $nombre;
        $this->cantidad = $cantidad;
        $this->tiempo = $tiempo;
    }

    public function data(){
        $respuesta['nombre'] = $this->nombre;
        $respuesta['cantidad'] = $this->cantidad;
        $respuesta['tiempo'] = $this->tiempo;
        return $respuesta;
    }

    public function crear($db){
        $plan = $this->data();
        $resultado = $db->getReference('plan')->push($plan);

        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro almacenado","key":"'.$resultado->getKey().'"}';
        }else{
            return '{"Mensaje":"Error al guardar el registro"}';
        }
    }

    public static function ObtenerPlanes($db){
        $resultado = $db->getReference('plan')->getSnapshot()->getvalue();
        echo json_encode($resultado);
    
    }

    public static function eliminar($db, $id){
    $db->getReference('plan')->getChild($id)->remove();

    }

    public function getNombre(){
        return $this->nombre;
    }

     
    public function setNombre($nombre){
        $this->nombre = $nombre;
        return $this;
    }

    
    public function getCantidad(){
        return $this->cantidad;
    }

    public function setCantidad($cantidad){
        $this->cantidad = $cantidad;

        return $this;
    }

    public function getTiempo(){
        return $this->tiempo;
    }

    public function setTiempo($tiempo){
        $this->tiempo = $tiempo;

        return $this;
    }
}
?>