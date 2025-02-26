let round = document.querySelector("#round");
let btn = document.querySelectorAll("button");
let shape = document.querySelector("#square");

btn[0].addEventListener("click" , colorchange );

function colorgenrator(){
  let color = Math.floor(Math.random()*255);
  return color;
}

function colorchange(){
  let newcolor = `rgb(${colorgenrator()} , ${colorgenrator()} , ${colorgenrator()})`;
  round.style.backgroundColor = newcolor;
}

btn[1].addEventListener("click" ,changeshape);
let arr =["square" , "triangle" , "circle" , "cross","left-arrow" , "frame" , "parallelogram" , "star" , "left-point" , "right-point" , "dimond" , "right-chevron"];

function shapegenrator(){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

function changeshape(){
  let idname = shapegenrator();
  shape.id = idname;
}