do {
    let age = prompt("Quel âge avez-vous ?");
    let sexe = prompt("Quel est votre sexe ?");
    let ville = prompt("Ou habitez-vous?");
    let result = window.confirm("Voici vos r\éponses : "+age+", "+sexe+", "+ville+". Les confirmez-vous ? oui/non");
    }
while (confirm != "oui");
    alert("Merci");