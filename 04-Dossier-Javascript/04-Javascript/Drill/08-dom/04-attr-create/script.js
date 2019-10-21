/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    //récuperer la valeur de "data-image"
    let doc = document.getElementById('source');
    let picture = source.getAttribute('data-image');
    //crée une balise dans une autre et ajouter l'élément à l'arbre 
    let nouveau = document.querySelector('figure#target').appendChild(document.createElement('img'));
    //modifier le contenu
    nouveau.innerHTML = picture;
    // supprimer un noeud par le parent 
    let docParent = doc.parentNode;
    docParent.removeChild(doc)
})();
