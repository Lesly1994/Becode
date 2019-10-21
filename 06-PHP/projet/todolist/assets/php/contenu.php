<?php


class Displayer
{
    function __construct() {
        $this->path = 'assets/json/data.json';
        $this->json = json_decode(file_get_contents($this->path));
    }
    
    function createElement($data) {
        return "<div draggable='true'>
                    <input type='checkbox' ".($data->check ? 'checked disabled' : '').">
                    <span ".($data->check ? 'style=text-decoration:line-trough' : '').">
                    <span>".$data->span."</span>
                </div>";
    }
    function iterate($data){
        $content = "";

        foreach($data as $value) {
            $content .= $this->createElement($value);
        }

        return $content;
    }
    function getTodo() {
        return $this->iterate($this->json->todo);
    }

    function getArchive() {
        return $this->iterate($this->json->archive);
    }
}

?>