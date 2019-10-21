/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let result;
    for (let row = 1; row < 11; row++) {
        for (let n = 1; n < 11; n++) {
            if (row == 0 && n > 0) {
                result += '[' + row + ']';
            } else if (row == 0 && n > 0) {
                result += '[' + n + '] ';
            } else if (n > 0 &&  row > 0) {
                result += (n * row) + ' ';
            }
        }
    }
    document.getElementById('target').innerHTML = result ;
})();