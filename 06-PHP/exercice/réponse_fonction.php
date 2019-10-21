<?php 

// exercice 1 

function affirmation($vraie) {
    return $vraie;
}
echo affirmation("true\n");


// exercice 2

    function planete($nom) {
        echo "Bonjour à toi, étranger de la planète " .$nom.".\n";
    };

planete ("Jupiter");
planete("Mars");

// exercice  3 

    function bienvenue($prenom, $hobby) {
        echo "Bienvenue ".$prenom." , toi qui aime beaucoup ".$hobby.".\n";
    };

bienvenue ("Lesly","Lasagne");
bienvenue ("Greg", "l'acool");

// exercice  4 

function calcul($nombre1, $nombre2) {
    if ($nombre1 > $nombre2) {
        echo "Le premier nombre est plus grand.\n";
    } else if ($nombre1 < $nombre2) {
        echo "Le premier nombre est plus petit.\n";
    } else if ($nombre1 == $nombre2) {
        echo "Les nombres sont identiques.\n";
    }
}
calcul (8,8);
calcul (1,6);
calcul (15,9);

// exercice 5

function phrase($debut_de_phrase, $numero) {
    echo $debut_de_phrase. $numero.".\n";
}
phrase ("Bonjour a toi numero : ", 86954);
phrase ("Bienvenue nuemro :" , 4585);

// exercice 6

function connaissance($prenom, $nom, $age) {
    echo "Bonjour " .$prenom. " " .$nom. ", tu as " .$age. " ans.\n";
}
connaissance ("Lola","Zavia",12);

// exercice 7

function genre($age, $genre) {
        
    if ($age >= 18) {
        echo "Vous êtes un(e) " .$genre. " et vous êtes majeur.";
    } else if ($age < 18) {
        echo "Vous êtes un(e) " .$genre. " et vous êtes mineur.";
    }
};
genre (48, "homme "); 

// exercice  8 

function addition($chiffre1, $chiffre2, $chiffre3) {
        
    $totale = $chiffre1 + $chiffre2 + $chiffre3;
    echo $totale;
    
};
addition (10, 20, 30);