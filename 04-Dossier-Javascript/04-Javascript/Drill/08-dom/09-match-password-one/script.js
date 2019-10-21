/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // récupérer les valeurs dans les champs 
    let firstInput = document.getElementById('pass-one').Value;
    let secondInput = document.getElementById('pass-two').value;
    // définir la fonction lors du click
    document.getElementById('run').addEventListener('click', () => {
        //fonction qui change la couleur si c'est différent
        function ColorInput(element) {
            element.style.border = "red";
            //condition 
            if (firstInput != secondInput) {
                ColorInput(firstInput);
                ColorInput (secondInput);
            }
        }
    })
})();
