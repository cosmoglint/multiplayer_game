
var socket;


function setup(){
  createCanvas(windowWidth,windowHeight);
  background(20);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', new_drawing);
}

function new_drawing(data){
  strokeWeight(0);
  fill('pink');
  circle(data.x,data.y,20);
}

function mouseDragged(){
  console.log("sending " + mouseX + "," + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse',data);

  strokeWeight(0);
  fill('white');
  circle(mouseX,mouseY,20);
}

function draw(){
}
