/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // définir une fonction qui lorsqu'on click fait ....
    document.getElementById('run').addEventListener('click' , () => {
        // creer un tableau vide 
        let table=[];
        //creer une boucle pour 10 nombres
        for (let i=1 ; i<=10 ; i++) {
            //creer des chiffres aléatoires
            let result = Math.floor(Math.random()*99+1);
            //push dans le tableau
            table.push(result);
            //dans le document , les id qui s 'apelle "n-" devront avoir un nombres a afficher 
            document.getElementById(`n-${i}`).innerHTML = result;
        }
        //les ... servent d'iteration (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition)
        let min = Math.min(...table);
        document.getElementById('min').innerHTML = min;
        let max = Math.max(...table);
        document.getElementById('max').innerHTML = max;
        let somme = table.reduce( (a,b) => a+b,0);
        document.getElementById('sum').innerHTML = somme;
        document.getElementById('average').innerHTML = somme/10;
        });
})();
