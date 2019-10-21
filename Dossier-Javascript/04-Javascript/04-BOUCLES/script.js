/* réponse exercice 1 dossier 4*/
let nombre=0;
for (nombre=0;nombre<20;nombre++){
    console.log(nombre);
if(nombre%2==0){
    console.log(nombre+"est pair");
} else(nombre%2!=0){
    console.log(nombre+"est impair");
  }
}

/*réponse exercice 2 dossier 4*/
let nombre=1;
for(nombre=1;nombre<10;nombre++){
let result=nombre*9;
console.log(nombre+"*9="+result);
}

/*réponse exercice 3 dossier 4*/ !!a corriger!!!
function myFunction (grade){
let nombre=prompt("entrer votre score");
let i=0;
for(i=0;i<=100;i++){
    if(i>=90){
        console.log("le score"+score+"est au grade A");
    }
    else if (i>=80){
        console.log("le score"+score+"est au grade B");
    }
    else if (i>=70){
        console.log("le score"+score+"est au grade C");
    }
    else if (i>=65){
        console.log("le score"+score+"est au grade D");
    }
    else{
        console.log("le score"+score+"est au grade F");
    }
  }
}


/* réponse exercice 4 dossier 4*/
let i;
for(i=0; i<=5; i++){
let x;
for(x=0; x<=i; x++){
    document.write("*");
}
document.write("<br>");
}