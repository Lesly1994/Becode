/*réponse exercice 1 dossier 07*/

console.log(Math.min(7,5,-12,6,32,18,14,-2));

console.log(Math.max(-3,9,21,36,27,54,17,35));

const array1=["7","5","-12","6","32","18","14","-2"];
const array2=["-3","9","21","36","27","54","17","35"];
let addition= parseInt(array1+array2);
console.log(Math.abs(addition));

/*réponse exercice 2 dossier 07*/
const FloatBateau=10.4;
let couleBateau=Math.floor(FloatBateau);
console.log(couleBateau);
let voleBateau=Math.ceil(FloatBateau);
console.log(voleBateau);

/* réponse exercice 3 dossier 07*/

-function myfunction(){
let essai= Math.floor((Math.random()*50)+50);
document.getElementById('demo').innerHTML=essai;
}


-function myfunction(){
let essai= Math.round((Math.random()));
document.getElementById('demo').innerHTML=essai;
}


-function myfunction(){
let essai= Math.floor((Math.random()*10)+1);
document.getElementById('demo').innerHTML=essai;
}

//avec un code HTML comme ceci 
<body>
    <button onclick="myfunction()">
    essayez-moi
    <p id="demo"></p>
    </button>
</body>
//pour creer un bouton qui génére le chiffre aléatoirement

/* réponse exercice 4 dossier 07*/

const tab=["Goro","Johnny Cago","Kano","Liu Kano","Raiden","Reptil","Scorpion","Shang Tsun","Sonya","Sub-Zero"]
function myfunction(array){
let nom= tab[Math.floor((Math.random()*tab.length))];
document.getElementById('demo').innerHTML=nom;
}