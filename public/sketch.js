
var socket;


function setup(){
  createCanvas(200,200);
  background(20);
  socket = io.connect('http://localhost:3000');
}

function mouseDragged(){
  console.log(mouseX + "," + mouseY);
  strokeWeight(0);
  fill('white');
  circle(mouseX,mouseY,20);
}

function draw(){
}
