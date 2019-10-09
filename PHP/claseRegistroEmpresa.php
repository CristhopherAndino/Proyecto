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
    private $seguidore;
    private $ventas;
    private $plan;
    private $banner;
    private $logotipo;

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
        $cContraseña,
        $seguidore,
        $ventas,
        $plan,
        $banner,
        $logotipo
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
        $this->plan = $plan;
        $this->seguidore = $seguidore;
        $this->ventas = $ventas;
        $this->banner = $banner;
        $this->logotipo = $logotipo;
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
        $registro['plan']=$this->plan;
        $registro['seguidore']=$this->seguidore;
        $registro['ventas']=$this->ventas;
        $registro['banner']=$this->banner;
        $registro['logotipo']=$this->logotipo;
        $registro['contraseña'] = password_hash($this->contraseña,PASSWORD_DEFAULT);
        $registro['cContraseña'] = password_hash($this->cContraseña,PASSWORD_DEFAULT);
        return $registro;
    }

    public function dataPlan(){
        $resultado['plan'] = $this->plan;
        return $resultado;
    }

    public function dataEP(){
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
        $registro['banner']=$this->banner;
        $registro['logotipo']=$this->logotipo;
        $registro['contraseña'] = password_hash($this->contraseña,PASSWORD_DEFAULT);
        $registro['cContraseña'] = password_hash($this->contraseña,PASSWORD_DEFAULT);
        return $registro;
    }

    public function databanner(){
        $registro['banner'] = $this->banner;
        return $registro;
    }

    public function datalogotipo(){
        $registro['logotipo'] = $this->logotipo;
        return $registro;
    }

    public static function ObtenerEmpresas($db){
        $resultado = $db->getReference('Empresa')->getSnapshot()->getValue();
        echo json_encode($resultado);
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

    public function editarPlan($db, $id){
        $resultado = $db->getReference('Empresa')->getChild($id)->update($this->dataPlan());
        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro actualizado","Key":"'.$resultado->getKey().'"';
        }else{
            return '{"Mensajes":"Error al guardar el registro"}';
        }
    }

    public function editarPerfilE($db, $id){
        //$this->cContraseña = $contraseña;
        $resultado = $db->getReference('Empresa')->getChild($id)->update($this->dataEP());
        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro actualizado","Key":"'.$resultado->getKey().'"';
        }else{
            return '{"Mensajes":"Error al guardar el registro"}';
        }
    }
    

}
?>