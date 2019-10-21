/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    //creer une variable qui nous donne la date et l'heure
    let date = new Date();
    // pour avoir l'heure et les minute et les secondes 
    let hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    let result = hour + ": " + min + " : " + sec;
    console.log(result);
    // avant 18h = bonjour => pour cela nous avons besoin de condition 
    if (hour < 18) {
        document.getElementById("target").innerHTML = "Bonjour";
    } else {
        document.getElementById("target").innerHTML = "Bonsoir";
    }
})();