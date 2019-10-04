<?php

class Empresa{
    private $nombre;
    private $pais;
    private $dirreccion;
    private $latitud;
    private $longitud;
    private $facebook;
    private $instagram;
    private $twitter;  
    private $telefono; 
    private $correo; 
    private $contraseña; 
    private $cContraseña; 

    public function __construct(
        $nombre,
        $pais,
        $dirreccion,
        $latitud,
        $longitud,
        $facebook,
        $instagram,
        $twitter,
        $telefono,
        $correo,
        $contraseña,
        $cContraseña  
    ){
        $this->nombre = $nombre;
        $this->pais = $pais;
        $this->dirreccion = $dirreccion;
        $this->latitud = $latitud;
        $this->longitud = $longitud;
        $this->facebook = $facebook;
        $this->instagram = $instagram;
        $this->twitter = $twitter;
        $this->telefono = $telefono;
        $this->correo = $correo;
        $this->contraseña = $contraseña;
        $this->cContraseña = $cContraseña;
    }

    public function data(){
        $registro['nombre']=$this->nombre;
        $registro['pais']=$this->pais;
        $registro['dirreccion']=$this->dirreccion;
        $registro['latitud']=$this->latitud;
        $registro['longitud']=$this->longitud;
        $registro['facebook']=$this->facebook;
        $registro['instagram']=$this->instagram;
        $registro['twitter']=$this->twitter;
        $registro['telefono']=$this->telefono;
        $registro['correo']=$this->correo;
        $registro['contraseña']=$this->contraseña;
        $registro['cContraseña']=$this->cContraseña;
        return $registro;
    }

    public function crear($db){
        $empresa = $this->Data();
        $resultado = $db->getReference('Empresa')->push($empresa);

        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro almacenado","key":"'.$resultado->getKey().'"}';
        }else{
            return '{"Mensaje":"Error al guardar el registro"}';
        }
    }

    public static function ObtenerEmpresas($db){
        $resultado = $db->getReference('Empresa')->getSnapshot()->getValue();
        echo json_encode($resultado);
    }

    public static function ObtenerEmpresa($db, $id){
        $resultado = $db->getReference('Empresa')->getChild($id)->getValue();
        echo json_encode($resultado);
    }

    public static function Eliminar($db, $id){
        $db->getReference('Empresa')->getChild($id)->remove();
        echo '{"Mensaje":"Registro borrado"}';
    }

    public function acualizar($db, $id){
        $resultado = $db->getReference('Empresa')->getChild($id)->set($this->data());
        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro actualizado","Key":"'.$resultado->getKey().'"';
        }else{
            return '{"Mensajes":"Error al guardar el registro"}';
        }
    }

}
?>