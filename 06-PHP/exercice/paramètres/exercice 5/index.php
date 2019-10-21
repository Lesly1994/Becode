<?php 

if (isset($_GET['semaine'])){
    echo "Nous entamons la semaine n°: " .$_GET['semaine'];
} else {
    echo "Erreur !!!";
}