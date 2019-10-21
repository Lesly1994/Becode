/* réponse exercice 1 dossier 08 */
const character = {
nom : "Goro",
age : 25,
items: ["Eau","Fiolle","Epée","Bouclier"]
}
let giveItem = function(Items) {
return Math.floor(Math.random() * Items.length);
}
for (let perso in character ) {
const result=("Tu viens de recevoir " + character.items[giveItem(character.items)]);
alert (result)
}

/* réponse exercice 2 dossier 08 */

let epee={
    title:"Épée de Gabriel",
    physic:15,
    magic:25,
    minLevel:12,
    available:true,
}
let hache={
    title:"Hache de guerre",
    physic:8,
    magic:12,
    minLevel:5,
    available:false,
}
let sceptre={
    title:"Sceptre des démons",
    physic:15,
    magic:35,
    minLevel:10,
    available:true,
}
let lance={
    title:"Lance d'Hikhar",
    physic:12,
    magic:20,
    minLevel:10,
    available:false,
}
let dague={
    title:"Dague de l'assassin",
    physic:10,
    magic:10,
    minLevel:3,
    available:false,
}
let arc={
    title:"Arc-à-flèche Arrowin",
    physic:35,
    magic:40,
    minLevel:13,
    available:true,
};

const items=["epee","hache","sceptre","lance","dague","arc"];
console.table([items]);
console.log(items.filter(function(available){
if(available===true){
    return available;
}
}));