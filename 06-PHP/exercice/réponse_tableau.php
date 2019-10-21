<?php 

// exercice 1

    $mois = array('Janvier','Février','Mars','Avril','Ma','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre');

// exercice 2 

$mois = array('Janvier','Février','Mars','Avril','Mai','Juin','Juillet',
    'Aout','Septembre','Octobre','Novembre','Décembre');
    
    echo $mois[3];
    echo $mois[5];
    $mois[9] = "Août";
    echo $mois[9];

// exercice 3

$ville_france = array( "01" => "Ain",  
                "03" => "Allier", 
                "07" => "Ardèche",
                "15" => "Cantal",
                "26" => "Drôme",
                "38" => "Isère",
                "42" => "Loire",
                "43" => "Haute-Loire",
                "63" => "Puy-de-Dôme",
                "69" => "Rhône",
                "73" => "Savoie",
                "74" => "Haute-Savoie"
            );

    echo $ville_france["69"];
    $ville_france["57"] = "Moselle";
    
    foreach($ville_france as $cle => $element) {
        
        echo "Le département " .$element. " a le numéro " .$cle. " .\n";
    };

// exercice 4

$prenom = array("Alex","Max","Dominique","Claude","Leslie","Lou");

foreach($prenom as $element) {
    
    echo "Salut " .$element. ", devine quoi! Je me marie samedi dans deux semaines! 
    J'espère te compter parmi les invités! Gros bisous :).\n";
};