<?php 

if (isset($_GET['age'])){
    echo "Vous avez :" .$_GET['age']. " ans.";
} else {
    echo "Il faut me renseigner sur votre age merci !";
}