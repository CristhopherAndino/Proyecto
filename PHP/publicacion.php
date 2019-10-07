<?php
class Publicacion{
    private $publicacion;

    public function __construct(
        $publicacion
    ){
    $this->$publicacion = $$publicacion;
    }

    public function data(){
        $repuesta['$publicacion'] = $this->$publicacion;
        return $repuesta;
    }

    public function crear($db){
        $publicacion = $this->Data();
        $resultado = $db->getReference('usuarios')->push($publicacion);

        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro almacenado","key":"'.$resultado->getKey().'"}';
        }else{
            return '{"Mensaje":"Error al guardar el registro"}';
        }
    }
}
?>