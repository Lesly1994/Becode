/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let valeurs = document.getElementById("numbers").value;
    let array = valeurs.split(',');
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        array.sort( (a,b) => {
            return a - b ;
        });
        console.table(array);
    });
})();