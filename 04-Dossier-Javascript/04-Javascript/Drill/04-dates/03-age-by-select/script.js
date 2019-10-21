/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //créer une variable avec la date du jour 
    let today = new Date();
    // recuperer les valeurs dans le champs input (en creant une fonction)
    let day = document.getElementById("bod-day").value,
        month = document.getElementById("bod-month").value,
        year = document.getElementById("bod-year").value;
    // afficher ses valeurs dans une seule variable 
    let date = day,month,year;
    console.log(date);


})();