<?php
class LoginUsuario{

    public static function login($correo, $contrasena, $db){
        $resultado = $db->getReference('usuarios')->orderByChild('correo')->equalTo($correo)->getSnapshot()->getValue();

      $key = array_key_first($resultado);
      $validar = password_verify($contrasena, $resultado[$key]['contrasena']);
        
        $respuesta["valido"] =  $validar==1?true:false;
        if ($respuesta["valido"]) {
            $respuesta["key"] = $key;
            $respuesta["correo"] = $resultado[$key]['correo'];
            $respuesta["token"] = bin2hex(openssl_random_pseudo_bytes(16));   
            setcookie('key',$respuesta["key"],time() + (86400 * 30), "/");
            setcookie('key',$respuesta["correo"],time() + (86400 * 30), "/");
            setcookie('key',$respuesta["token"],time() + (86400 * 30), "/");
        }
        
        echo json_encode($respuesta);
    }
}
?>