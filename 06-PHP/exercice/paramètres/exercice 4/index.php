<?php 

if ((isset($_GET['langage'])) && (isset($_GET['serveur']))){
    echo " Voici le langage utilisé : " .$_GET['langage']. " et le serveur utilisé : " .$_GET['serveur'];
} else {
    echo "Erreur !!!";
}