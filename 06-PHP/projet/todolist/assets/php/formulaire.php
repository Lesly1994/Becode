<?php   

$validate = $_POST['validate'];
$todo = $_POST['todo'];
$path = '../json/data.json';

$json = json_decode(file_get_contents($path));

// c'est comme une condition en une seul ligne , on regarde si un tableau est crée si pas il devra en creer un 
$arr = array("todo" => ($json->todo != null ? $json->todo : array())
,"archive" => ($json->archive != null ? $json->archive : array()));

$arr['todo'] = json_decode($todo);
$arr['archive'] = json_decode($validate);

file_put_contents($path,json_encode($arr));
// if(file_put_contents($path,json_encode($arr)))
// 	echo 'Success';
// else{
//     echo 'Failed';
// }
?>