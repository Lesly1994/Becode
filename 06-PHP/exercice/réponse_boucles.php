<?php

// exercice 1  

    $ma_boucle = 0 ;

    while ($ma_boucle <= 10) {

        echo 'Ma boucle a deja fait ' .$ma_boucle. ' tours . ';
        
        $ma_boucle++;
    }



// exercice  2

    $second_chiffre = 30 ;

    for ($first_chiffre = 0 ; $first_chiffre <= 20 ; $first_chiffre++) {

        $multiplication = $first_chiffre * $second_chiffre;

        echo "$multiplication\n";
    }



// exercice 3 


    $second_nombre = 45 ; 

    for ($first_nombre = 100 ; $first_nombre >= 10  ; --$first_nombre) {

        echo  $first_nombre * $second_nombre."\n " ;
    };

// exercice 4

    for ($nombre = 1 ; $nombre <= 10  ; $nombre++) {

        echo $nombre /2 ."\n " ;
};

// exercice 5 

    for ($essai = 1 ; $essai <= 15 ; $essai++) {
        echo "On y arrive presque ! ( en " .$essai. " coups ).\n";
    };
    
// exercice  6 

    for ($essai = 20 ; $essai >= 0 ; $essai--) {

        echo "C'est presque bon !  ( en " .$essai. " coups ).\n";
};

// exercice 7

    for ($premiere_essai = 1 ; $premiere_essai <= 100 ; $premiere_essai +=15) {

        echo "On tient le bon bout !.\n";
};

// exercice 8

    for ($secondaire = 200  ; $secondaire >= 0 ; $secondaire -= 12) {

        echo "Enfin !!\n";
};