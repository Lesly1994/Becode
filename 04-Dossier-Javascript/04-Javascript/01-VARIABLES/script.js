## exercice 01

let enfant = 2
let nom = "Lily"
let pays = "Canada"
let metier = "urgentiste";
let résult = "Vous serez" + metier + ",et habiterez" + pays + "et marié à" + nom + "avec" + enfant + "enfant(s).";
console.log(résult);

// exercice 02
let année = 2019;
let naissance = 1994;
let résult1 = année - naissance;
let résult = "Vous avez " + résult1 + " ans.";
console.log(résult)

//exercice 03
let age = 25;
let max = 100;
let denrée = "biscuits";
let consommation_par_jour = 2;
let année_restante = max - age;
let jours = année_restante * 365;
let consommation = jours * 2;
let result = "Il vous reste " + consommation + " " + denrée + " avant d'atteindre " + année_restante + " ans."
console.log(result)

//exercice 04
let calcul=(1 + 2) * 3 + 4 / 2;
// les parenthèses en premier
let etape1=3;
//la multiplication en suivant
let etape2=etape1*3;
//la division en troisième
let etape3=4/2;
//l'addition en dernier
let etape4= etape2+etape3;
console.log(etape4);
console.log("calcul automatique:" + ((1 + 2) * 3 + 4 / 2));
