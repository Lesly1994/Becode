let input = document.getElementById('input');
let todo = document.getElementById('todo');
let archive = document.getElementById('archive');

function onClick(checkbox, content) {
    let span = content.children[1];
    checkbox.addEventListener('click', () => {
        // ajoute l'element au debut de l'element selectionner
        archive.prepend(content);
        checkbox.disabled = true;
        span.style.textDecoration = 'line-through';

        sendData({
            todo: iterate(todo),
            validate: iterate(archive)
        })
    })
}

function iterate(container) {
    let child = container.children;
    let array = [];

    for (let i = 0; i < child.length; i++) {

        let check = child[i].children[0].checked;
        let span = child[i].children[1].innerText;

        array.push({
            check,
            span
        })
    }
    return JSON.stringify(array);
}
function addDraggable(div){
    div.addEventListener("dragstart",(event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    })
    div.addEventListener("dragover", (event) =>{
        event.preventDefault();
    })
    div;addEventListener('drop', (event) => {
        console.log("dropped");
    })
}

function sendData(data) {
    let formData = new FormData();

    formData.append('validate', data.validate);
    formData.append('todo', data.todo);

    fetch('assets/php/formulaire.php', {
            method: 'post',
            body: formData
        })
        .catch(err => console.lof(err))

}

function createTodo(valeur) {
    // on crée les élements suivant
    let div = document.createElement("div");
    // la checkbox est un input
    let checkbox = document.createElement('input');
    let span = document.createElement('span');

    // on ajoute les élement a la div
    div.appendChild(checkbox);
    div.appendChild(span);

    // on definit que la checkbox est une checkbox
    checkbox.type = 'checkbox';
    span.innerHTML = valeur;

    // ajouter au tout debut de l'element choisi 
    todo.prepend(div);

    onClick(checkbox, div);
}

document.getElementById('form').addEventListener('submit', (event) => {
    //preventDefault annule le comportement basique d'un objet (ici le rechargement de la page)
    event.preventDefault();
    // appel de la fonction quand il envoi le formulaire 
    createTodo(input.value);
})

document.getElementById('save').addEventListener('click', () => {

    sendData({
        todo: iterate(todo),
        validate: iterate(archive)
    })

})

function iterateDrag(target) {
    let children = todo.children;

    for (let i = 0; i < children.length; i++) {
        onClick(children[i].children[0], children[i])
        addDraggable(children[i]);
    }
}
iterateDrag(todo);
iterateDrag(archive);