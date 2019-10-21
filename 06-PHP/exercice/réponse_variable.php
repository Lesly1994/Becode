<?php 

// exercice 1 

    $nom_de_famille= "Valley";
    $prenom_de_la_personne= "Jonnhy";
    $age_de_la_personne= 25;

    echo 'bonjour ' . $prenom_de_la_personne . ', enfant de la famille ' . $nom_de_famille . ' ayant atteint le level ' . $age_de_la_personne . '.';

// exercice 2 

    
    $Km = 1;
    $km = 3;
    $Km = 125;
    echo 'tu es as ' . $Km . ' km .';

// exercice 3


    $chaine_de_charactère = "hello world !";
    $chiffre_entier = 125;
    $chiffre_decimale = 15.2;
    $je_suis_une_bombe_en_php = false;

    echo "$chaine_de_charactère\n$chiffre_entier\n$chiffre_decimale\n$je_suis_une_bombe_en_php";

// exercice 4

    $chiffre_plein= null ;

    echo $chiffre_plein;

    $chiffre_plein= 352;

    echo $chiffre_plein;

// exercice 5

$addition = 3 + 4;
$multiplication = 5 * 20;
$division = 45 / 5;

echo "$addition\n$multiplication\n$division";

// exercice 6

$prix_initiale = 785 ;
$prix_de_la_remise = (785 * 30) / 100;
$prix_a_regler = 785 - $prix_de_la_remise;

echo 'Le prix de départ est de ' .$prix_initiale. ' euros , la ristourne est de ' .$prix_de_la_remise. ' euros,  je vais payer seulement ' .$prix_a_regler. 'euros.';
