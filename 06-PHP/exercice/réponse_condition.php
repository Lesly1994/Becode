<?php
// exercice  1 

    $age_de_la_personne = 25 ;

    if ($age_de_la_personne >= 18) {
        echo "Vous êtes majeur.";
    } else {
        echo "Vous êtes mineur.";
    };



//exercice 2 



    $IsEasy = true ;

    if ($IsEasy == true) {
        echo "Bravo , vous êtes trop fort(e).";
    } else {
        echo "OHHh , ne vous découragez pas. Recommencez .";
    };


// ou alors le bonus 



    $IsEasy = false ;

    if ($IsEasy) {
        echo "Bravo , tu es vraiment trop fort(e).";
    } else {
        echo "Ne baisse pas les bras, courage.";
    };



// exercice 3 


    $age_du_candidat = 38 ;
    $genre_du_candidat= "homme";

    if ($genre_du_candidat == "femme" && $age_du_candidat >= 18) {
        echo "Vous êtes une " .$genre_du_candidat. " et vous êtes majeur .";
    } else if ($genre_du_candidat == "femme" && $age_du_candidat <= 18) {
        echo "Vous êtes une " .$genre_du_candidat. " et vous êtes mineur .";
    } else if ($genre_du_candidat == "homme" && $age_du_candidat >= 18) {
        echo "Vous êtes un " .$genre_du_candidat. " et vous êtes majeur .";
    } else if ($genre_du_candidat == "homme" && $age_du_candidat <= 18) {
        echo "Vous êtes un " .$genre_du_candidat. " et vous êtes mineur .";
    };


// exercice  4 


    $magnitude = 3 ;

    switch($magnitude)
    {
        case 1:
        echo "Micro-séisme impossible à ressentir.";
        break;

        case 2:
        echo "Micro-séisme impossible à ressentir mais enregistrable par les sismomètres.";
        break;

        case 3:
        echo "Ne cause pas de dégats mais commence à pouvoir être légèrement ressenti.";
        break;

        case 4:
        echo "Séisme capable de faire bouger des objets mais ne causant généralement pas de dégats.";
        break;

        case 5:
        echo "Séisme capable d'engendrer des dégats importants sur de vieux bâtiments ou bien des bâtiments présentants des défauts de construction. Peu de dégats sur des bâtiments modernes.";
        break;

        case 6:
        echo "Fort séisme capable d'engendrer des destructions majeures sur une large distance (180 km) autour de l'épicentre.";
        break;

        case 7:
        echo "Séisme capable de destructions majeures à modérées sur une très large zone en fonction de la distance.";
        break;

        case 8:
        echo "Séisme capable de destructions majeures sur une très large zone de plusieurs centaines de kilomètres.";
        break;

        case 9:
        echo "Séisme capable de tout détruire sur une très vaste zone.";
        break;
    }


// exercice 5 


    $maVariable = "homme";

    if ($maVariable == "homme") {
        echo "c\'est un développeur !";
    } else {
        echo "C\'est une développeuse !";
    };


// exercice 6


    $monAge = 25 ;

    if ($monAge >= 18) {
        echo "Tu es majeur.";
    } else {
        echo "Tu es mineur.";
    };


// exercice 7


    $maVariable = false ;

    if ($maVariable == false) {
        echo "C\'est pas bon !!!";
    } else {
        echo "C\'est ok.";
    };


// exercice 8


    $maVariable = true ;

    if ($maVariable) {
        echo "C\'est ok";
    } else {
        echo "C\'est pas bon !!!!";
    };

