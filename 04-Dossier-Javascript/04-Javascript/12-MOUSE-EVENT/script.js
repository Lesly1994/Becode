// exercice  01 
let test = document.querySelectorAll(".hoverMe");
console.log(test)
for (let i=0; i<test.length ; i++){
  test[i].addEventListener("mouseover",function (){
    test[i].style.display = "none";
    console.log(i)
  })
}


// exercice 02 
let test = document.querySelectorAll(".hoverMe");
console.log(test)
for (let i=0; i< test.length ; i++){
  test[i].addEventListener("mouseover",function (){
    test[i].style.display = "none";
  })
}
let id = document.getElementById("reset");
id.addEventListener("click", function (){
  for (let i=0 ; i< test.length ; i++){
    test[i].style.display = "block";
  }
})

// exercice 03 
let x = 0;
let y = 0;

let moveX = document.getElementsByClassName("axe-x");

moveX.addEventListener("mousemove",function() {
for(i=0;i<1000;i++){
moveX.innerHTML = "position de x = " + (event.offsetX);
}
})

let moveY = document.getElementsByClassName("axe-y");

moveX.addEventListener("mousemove",function() {
for(i=0;i<1000;i++){
moveY.innerHTML = "position de y = " + (event.offsetY);
}
})