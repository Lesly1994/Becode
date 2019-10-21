<?php 

if ((isset($_GET['nom'])) && (isset($_GET['prenom']))){
    echo $_GET['nom']. " " .$_GET['prenom'];
} else {
    echo " Erreur !!!";
}