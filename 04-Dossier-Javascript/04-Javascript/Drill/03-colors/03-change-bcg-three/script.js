/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        // your code here
        document.getElementById("run").addEventListener('click', () => {
                // creer une variable avec chiffres (0-9) et lettres (A-F) pour les couleur en hexadecimal
                let charactere = '0123456789ABCDEF';
                //un code hexadecimal a besoin d'un # 
                let colors = '#';
                //créer une boucle qui servira a mettre une limite a 6 characteres
                for (let i = 0; i < 6; i++) {
                        //une code hexadecimal commence toujours par un # et ensuite viennent les characteres différent 
                        //les charactères doivent etre aleatoire utiliser un Math.random s'impose 
                        colors += charactere[(Math.floor(Math.random() * 16))];
                        document.body.style.backgroundColor = colors;
                }
        });
})();