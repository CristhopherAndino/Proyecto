<?php
class ofertones{
    private $nombreE;
    private $descuento;
    private $real;
    private $Oferton;
    private $fechaF;
    private $fechaI;
    private $sucursales;
    private $foto;

    public function __construct(
        $nombreE,
        $descuento,
        $real,
        $Oferton,
        $fechaF,
        $fechaI,
        $sucursales,
        $foto
    ){
        $this->nombreE = $nombreE; 
        $this->descuento = $descuento;
        $this->real = $real;
        $this->Oferton = $Oferton;
        $this->fechaF = $fechaF;
        $this->fechaI = $fechaI;
        $this->sucursales = $sucursales;
        $this->foto = $foto;
    }

    public function data(){
        $resultado['nombreE'] = $this->nombreE;
        $resultado['descuento'] = $this->descuento;
        $resultado['real'] = $this->real;
        $resultado['Oferton'] = $this->Oferton;
        $resultado['fechaF'] = $this->fechaF;
        $resultado['fechaI'] = $this->fechaI;
        $resultado['sucursales'] = $this->sucursales;
        $resultado['foto'] = $this->foto;
        return $resultado;
    }
    
    public function crear($db){
        $oferton = $this->data();
        $resultado = $db->getReference('ofertones')->push($oferton);

        if($resultado->getKey() != null){
            return '{"Mesaje":"Resgistro almacenado","key":"'.$resultado->getKey().'"}';
        }else{
            return '{"Mensaje":"Error al guardar el registro"}';
        }
    }

}
?>