<?php 

if ((isset($_GET['batiment'])) && (isset($_GET['salle']))){
    echo "Rendez-vous dans le batiment n°: " .$_GET['batiment']. " dans la salle n°: " .$_GET['salle'];
} else {
    echo "Erreur !!!";
}