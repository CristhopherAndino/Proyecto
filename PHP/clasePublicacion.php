<?php
class Publicidad{
    private $nombreP;
    private $nombreE;
    private $precioP;
    private $fotoP;
    private $informacionP;
    private $comentariosP;

    public function __construct(
        $nombreP,
        $nombreE,
        $precioP,
        $fotoP,
        $informacionP,
        $comentariosP
    ){
        $this->nombreP = $nombreP;
        $this->nombreE = $nombreE;
        $this->precioP = $precioP;
        $this->fotoP = $fotoP;
        $this->informacionP = $informacionP;
        $this->comentariosP = $comentariosP;      
    }

    public function data(){
        $respuesta['nombreP'] = $this->nombreP;
        $respuesta['nombreE'] = $this->nombreE;
        $respuesta['precioP'] = $this->precioP;
        $respuesta['fotoP'] = $this->fotoP;
        $respuesta['informacionP'] = $this->informacionP;
        $respuesta['comentariosP'] = $this->comentariosP;
        return $respuesta;
    }

    public function dataComentarios(){
        $respuesta['comentariosP']  = $this->comentariosP;
        return $respuesta;
    }

    public function dataFoto(){
        $respuesta['fotoP']  = $this->fotoP;
        return $respuesta;
    }

    public function crear($db){
        $pubicidad = $this->Data();
        $resultado = $db->getReference('publicacion')->push($pubicidad);

        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro almacenado","key":"'.$resultado->getKey().'"}';
        }else{
            return '{"Mensaje":"Error al guardar el registro"}';
        }
    }

    public function agregarComentario($db, $id){
        $resultado = $db->getReference('publicacion')->getChild($id)->update($this->dataComentarios());
        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro actualizado","Key":"'.$resultado->getKey().'"';
        }else{
            return '{"Mensajes":"Error al guardar el registro"}';
        }
    }

    public function agregarFoto($db, $id){
        $resultado = $db->getReference('publicacion')->getChild($id)->update($this->dataFoto());
        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro actualizado","Key":"'.$resultado->getKey().'"';
        }else{
            return '{"Mensajes":"Error al guardar el registro"}';
        }
    }
    }
?>