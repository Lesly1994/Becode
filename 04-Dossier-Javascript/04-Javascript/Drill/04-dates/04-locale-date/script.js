/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    //en 1er creer un tableau pour les jours et les mois 
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    //on récupere la date du jour 
    let today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    if (min < 10) {
        min = "0"+min;
    }
    let HourDay = hours + " h "+ min ;
    // on construit le message a afficher 
    //on recupere le nom du jour 
    //-1 car par defaut , 0 est egal a dimanche 
    let mess = jours[today.getDay()-1]+ " ";
    //recupere le numero du jour
    mess += today.getDate() + " ";
    //recuperer le mois
    mess += mois[today.getMonth()]+" ";
    mess += today.getFullYear()+" ";
    document.getElementById('target').innerHTML = mess +", "+ HourDay ;
})();