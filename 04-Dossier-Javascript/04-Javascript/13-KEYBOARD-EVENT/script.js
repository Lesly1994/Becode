// exercice 01 
// definir l'élement qui nous intéresse
let character = document.getElementById('character');
// une variable pour lui indiquer que c'est la couleur qu'on va modifier et lui donner une fonction qui s'apelle color .
let changeBackground = (color) => {
character.style.backgroundColor = color;
}
// on selectionne le Body et on fait une fonction addEventListener avec KeyDown = en appuyant sur la touche tu dois faire cela ....) 
document.body.addEventListener('keydown', (event) => {
    // le switch est un raccourci pour eviter les if , else if , else if .....
    switch (event.key) {
    case '0':
        changeBackground('red');
        break;
    case '1':
        changeBackground('blue');
        break;
    case '2':
        changeBackground('yellow');
        break;
    case '3':
        changeBackground('orange');
        break;
    case '4':
        changeBackground('brown');
        break;
    case '5':
        changeBackground('grey');
        break;
    case '6':
        changeBackground('violet');
        break;
    case '7':
        changeBackground('purple');
        break;
    case '8':
        changeBackground('pink');
        break;
    case '9':
        changeBackground('lightblue');
    }
});

// exercice 02 
let up = document.getElementById('up');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right');
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      up.classList.add("highlight");
      break; 
    case 'ArrowDown':
      down.classList.add("highlight");
      break;
    case 'ArrowLeft':
      left.classList.add("highlight");
      break;
    case 'ArrowRight':
      right.classList.add("highlight");
  }
});
window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'Arrowup':
      up.classList.remove("highlight");
      break;
    case 'ArrowDown':
      down.classList.remove("highlight");
      break;
    case 'ArrowLeft':
      left.classList.remove("highlight");
      break;
    case 'ArrowRight':
      right.classList.remove("highlight");
  }
});