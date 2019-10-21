/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    // your code here
    //définir notre fonction 
    document.getElementById('run').addEventListener('click', () => {
        //.shift retire le 1er élément de la liste du tableau 
        fruits.shift("pomme");
        //.pop retire le dernière élement de la liste du tableau
        fruits.pop("cerise");
        // .unshift ajoute un élement en 1er ligne du tableau 
        fruits.unshift("banane");
        //.push ajoute des éléments a la fin du tableau 
        fruits.push("kiwi");
        // console.table affiche un tableau dans la console 
        console.table(fruits);
    })
})();
