<?php

class Usuarios{
    private $nombre;
    private $apellido;
    private $fecha;
    private $genero;
    private $pais;
    private $correo;
    private $contrasena;
    private $cContrasena;  

    public function __construct(
        $nombre,
        $apellido,
        $fecha,
        $genero,
        $pais,
        $correo,
        $contrasena,
        $cContrasena  
    ){
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->fecha = $fecha;
        $this->genero = $genero;
        $this->pais = $pais;
        $this->correo = $correo;
        $this->contrasena = $contrasena;
        $this->cContrasena = $cContrasena;
    }

    public function data(){
        $registro['nombre']=$this->nombre;
        $registro['apellido']=$this->apellido;
        $registro['fecha']=$this->fecha;
        $registro['genero']=$this->genero;
        $registro['pais']=$this->pais;
        $registro['correo']=$this->correo;
        $registro['contrasena'] = password_hash($this->contrasena,PASSWORD_DEFAULT);
        $registro['cContrasena']= password_hash($this->cContrasena,PASSWORD_DEFAULT);
        return $registro;
    }

    public function crear($db){
        $usuario = $this->Data();
        $resultado = $db->getReference('usuarios')->push($usuario);

        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro almacenado","key":"'.$resultado->getKey().'"}';
        }else{
            return '{"Mensaje":"Error al guardar el registro"}';
        }
    }

    public static function ObtenerUsuarios($db){
        $resultado = $db->getReference('usuarios')->getSnapshot()->getValue();
        echo json_encode($resultado);
    }

    public function ObtenerUsuario($db, $id){
        $resultado = $db->getReference('usuarios')->getChild($id)->getValue();
        echo json_encode($resultado);
    }

    public static function eliminar($db, $id){
       $db->getReference('usuarios')->getChild($id)->remove();
        echo '{"Mensaje":"Se a eliminado el elmento"}';
    }

    public function actualizar($db,$id){
        $resultado = $db->getReference('usuarios')->getChild($id)->set($this->data());

        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro actualizado","Key":"'.$resultado->getKey().'"';
        }else{
            return '{"Mensajes":"Error al guardar el registro"}';
        }
    }
}
?>