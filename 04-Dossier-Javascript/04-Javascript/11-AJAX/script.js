
// exercice ajax 
// charger le fichier  data json 
const getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min))+min
}
const req= new XMLHttpRequest
let a = []
let b = []
let c = []
req.onreadystatechange = (event) =>{
    if(req.readyState === XMLHttpRequest.DONE){
        if(req.status === 200){
            res = JSON.parse(req.response)
            console.log (res)
            //map = fonction itérative 
            //on prend tous les elements et on execute un console.log pour tous les éléments
            //res.map((x) => console.log (x))
            res.map((element) => element["score"] = getRandomInt(0,1000))
            //3.sort = fonction itérative
            res.sort((el1,el2) => el1.score-el2.score)
            //4. forEach
            res.forEach((element) => {
                //si l'element et plus que 750 on le push dans le tableau a
                if (element.score > 750) {
                    a.push(element)
                }
                else if (element.score > 500){
                    b.push(element)
                }
                else {
                    c.push(element)
                }
            })
            //5.filter
            // == designe une condition , une comparaison
            const filtre = res.filter((element) => element.country === "Bahrain")
            //6
            console.log(res[0])
            // 7
            console.log(res[res.length - 1])





            console.log(filtre)
            console.log(res)
            console.log(a,b,c)

// l'exercice est fait pour qu'on utilise les fonction native de JS 

function getRandomInt(min,max)
{
    return Math.round(Math.random()*(max-min));
}

const req = new XMLHttpRequest();
let a=[];
let b=[];
let c=[];

req.onreadystatechange=(event)=>
{
    if(req.readyState===XMLHttpRequest.DONE) //DONE vaut 4 actuellement mais on ne sait jamais à l'avenir
    {
        if(req.status ===200)
        {
            res = JSON.parse(req.response);
            console.log(res)
            //res.map((x) => console.log(x));
            //map crée un nouveau tableau pour le modifier et le renvoie (ici ça marche car on modifie les mêmes objets en mémoire)
            res.map( (element) => element["score"] = getRandomInt(0,1000));
            res.sort((el1,el2) => el1.score-el2.score);                //sort est une fonction itérative
            //impacte le tableau res directement donc modifie le tableau directement 
            res.forEach((element) =>
            {
                if(element.score >750)
                {
                    a.push(element);
                }
                else if(element.score > 500)
                {
                    b.push(element);
                }
                else
                {
                    c.push(element);
                }
            })
            const filtre = res.filter((element) =>  element.country == "Bahrain");
            console.log(res);
            console.log(filtre);
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(res[0]);//commence à 0
            console.log(res[res.length-1]);// donc se termine 1 avant la longueur totale
        }
        else
        {
            console.error("Code d'erreur de la page renvoyé", req.status);
        }
    }
    else
    {
        console.error("Le fichier ne s'est pas chargé, code d'erreur : ", req.readyState);
    }
}
req.open("GET","data.json");//télécharge le fichier 
req.send(); //rien à renvoyer donc pas de paramètre```