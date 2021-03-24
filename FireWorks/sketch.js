var firework = [];
var gravity;

function setup() {
  createCanvas(400,400);
  stroke(255);
  strokeWeight(4);
  gravity = createVector(0, 0.2);
  firework.push(new Firework());
  //firework = new Particle(random(width), height);
  
}

function draw() {
  background(51);
  
 if(random(1) < 0.1){
     firework.push(new Firework()); 
 }
 
 for(var i = 0; i < firework.length; i ++){
 	  firework[i].update();
 	  firework[i].show();
 }
 
 
  
}