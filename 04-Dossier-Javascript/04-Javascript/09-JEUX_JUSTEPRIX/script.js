/*réponse du juste prix*/
let aNumber;
const min=20;
const max=80;
let coups=0;
let number =  Math.round(Math.random()*20+60);
console.log(number);
while (aNumber!=number){
    aNumber=prompt("Veuillez saisir un nombre.", "");
    if(aNumber< number ) {
        coups=coups+1;
        alert("c'est plus");
    }
    else if(aNumber>number) {
        coups=coups+1;
        alert("c'est moins");
    }
    else if(aNumber==number) {
        alert("Bravo tu as trouvé en "+coups+" coups");
    }
  }