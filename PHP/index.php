<?php
require_once('../../vendor/autoload.php');
use Kreait\Firebase\Factory;
 
class Database{
    private $keyFile = '../../llave/proyecto-a60c3-54aa346c301c.json';
    private $URI = 'https://proyecto-a60c3.firebaseio.com/';
    private $db;

    public function __construct(){
        $firebase = (new Factory)
        ->withServiceAccount($this->keyFile)->withDatabaseUri($this->URI)->create();
        
       $this->db = $firebase->getDatabase();
    }

    public function getDB(){
        return $this->db;
    }
}
?>