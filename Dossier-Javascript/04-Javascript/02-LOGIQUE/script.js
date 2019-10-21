/* réponse exercice 1 dossier 2*/
let langue="es";
let message_fr="Bonjour tout le monde!";
let message_es="Holla mundo!";
let message_en="Hello world !";
let text=prompt('langue')
if(text==langue) {
    console.log(message_es);
}
else if (text=="fr"){
    console.log(message_fr);
}
else if (text=="en"){
    console.log(message_en);
}

/* réponse exercice 2 dossier 2*/
let score=prompt('votre score');
let final;
if(score>=90){
    final="A";
}
else if(score<90){
    final=" B";
}
if(score<=50){
    final=" C";
}
alert("Votre Rang est"+final+".");

/* réponse exercice 3 dossier 2*/
let singulier="Pomme";
let chiffre=prompt('entrer votre chiffre');
let result="Pomme";
if (chiffre>=2){
    console.log("Je possède "+chiffre+" "+result+"s.");
}