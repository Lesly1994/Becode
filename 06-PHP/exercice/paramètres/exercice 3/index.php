<?php

if ((isset($_GET['dateDebut'])) && (isset($_GET['dateFin']))){
    echo "Cela commence le : " .$_GET['dateDebut']. " et cela ce termine le : " .$_GET['dateFin'];
} else {
    echo " Erreur !!! ";
}