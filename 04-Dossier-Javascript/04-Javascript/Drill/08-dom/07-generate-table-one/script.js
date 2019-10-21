/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let table = "<table> <tr>"; // on place dans une variable le tableau (ici le debut du tableau)
    for (let row=1; row<=10 ; row++){ // on crée une boucle pour avoir 10 lignes dans notre tableau
        table += "<td> </td>"; // on rajoute dans notre variable les éléments 
    }
    table += "</tr> </table>"; // on rajoute la fin de notre tableau dans cette meme variable 
    document.getElementById("target").innerHTML = table; // on "injecte" dans le html la variable contenant le tableau en html
})();