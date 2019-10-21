/*exercice webservice*/
//on instancie l'objet XMLHttpRequest()
const req = new XMLHttpRequest()
//onreadystatechange => detecte si on est en lien avec le serveur, si il y a un changement d'état
//callback: renvoi une variable (une réponse)
const quote = document.querySelector("#quote")

req.onreadystatechange = (event) =>{
    //demande si c'est ok pour le serveur 
    if(req.readyState === XMLHttpRequest.DONE){
        //200 : c'est ok , on a recu une réponse
        if(req.status === 200){
            //JSON.parse est natif a JS
            const json = JSON.parse(req.response)
            console.log(json)
            const text = document.createTextNode(json.quote)
            quote.appenChild(text)
            //on va créer une balise
            let cite = document.createElement("cite")
            cite.innerHTML = json.author
            quote.appendChild(cite)
        }
        else {
            console.log("erreur",req.status)
        }
    }
    //.DONE = ok
}
//nous venons de configurer notre requéte
req.open("GET","https://thatsthespir.it/api")
req.send()
//créer un blockquote dans le body avec id="quote"
// aller voir de la doc sur les API 

