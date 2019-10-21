/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // recupérer les valeurs dans les input 
    let firstPassword = document.getElementById('pass-one').value;
    let secondPassword = document.getElementById('pass-two').value;

    document.getElementById('run').addEventListener('click', () => { 

    // crée une condition si le premier password est différent du second alors afficher error dans l'input 
    if (firstPassword != secondPassword) {
        document.getElementById('pass-two').value = "error" ;
        document.getElementById('pass-one').value = "error" ; 
    }
    })
})();
