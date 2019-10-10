<?php
class sucursales{
    private $nombreE;
    private $nombre;
    private $latitud;
    private $longitud;
    private $contrasenaE;

    public function __construct(
        $nombreE,
        $nombre,
        $latitud,
        $longitud,
        $contrasenaE
    ){
        $this->nombreE = $nombreE;
        $this->nombre = $nombre;
        $this->latitud = $latitud;
        $this->longitud = $longitud;
        $this->contrasenaE = $contrasenaE;
    }

    public function data(){
        $resultado['nombreE'] = $this->nombreE;
        $resultado['nombre'] = $this->nombre;
        $resultado['latitud'] = $this->latitud;
        $resultado['longitud'] = $this->longitud;
        $resultado['contrasenaE'] = $this->contrasenaE;
        return $resultado;
    }

    public function crear($db){
        $sucursal = $this->data();
        $resultado = $db->getReference('sucursales')->push($sucursal);

        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro almacenado","key":"'.$resultado->getKey().'"}';
        }else{
            return '{"Mensaje":"Error al guardar el registro"}';
        }
    }

    public static function ObtenerUsuarios($db){
        $resultado = $db->getReference('sucursales')->getSnapshot()->getValue();
        echo json_encode($resultado);
    }
}

?>