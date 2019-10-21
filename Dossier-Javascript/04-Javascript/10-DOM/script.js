// exercice 01 
let body=document.body;
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");
let para=document.getElementById("first-paragraph");
para.classList.remove("bg-lime","gray");
para.classList.add("aqua");
let elements=document.querySelectorAll(".bg-silver");
for(let i=0;i < elements.length;i++){
    elements[i].classList.remove("bg-silver");
    elements[i].classList.add("bg-teal");
}
let block=document.querySelector("blockquote");
block.classList.add("bg-white");

// exercice 02
let table=document.querySelector("#my-table");
table.classList.add("bg-purple");
let para=document.querySelectorAll(".container p");
for(let i=0;i< para.length;i++){
para[i].classList.add("shadow");
}

// exercice 03
let pre=document.querySelectorAll("pre");
for(let i=0;i< pre.length;i++){
    pre[i].style.color="white";
    pre[i].style.backgroundColor="black";
    pre[i].style.borderTop="3px solid red";
    pre[i].style.borderBottom="3px solid red";
}
let titre=document.querySelector("h3");
titre.innerHTML="<em>Itelic title ! yeah !</em>";
let sousTitre=document.querySelector("h2");
sousTitre.innerHTML="<strong>HTML doens't work !</strong>";

//exercice 04
let liste=document.querySelector("ul");
let newli=document.createElement("li");
newli.innerHTML="Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
liste.appendChild(newli);

// exercice 04 bis

let ol = document.querySelector("ol").children.length;
//
while (ol.children) {
    ol.removeChild(ol.children);
}
const tab=["Silent Teacher","Code Monkey", "CodeCombat"];
for (let i=0;i< tab.length;i++) {
    let liste=document.createElement("li");
    ol.appendChild(liste);
}