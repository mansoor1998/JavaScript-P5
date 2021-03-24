var Color = {
  r:255,
  g:0,
  b:0
};
var spot = {
  x: 10,
  y: 10
};

var Size;

function setup() {
  createCanvas(600, 400);
  background(0,255,0);
}

function draw() {
 
 noStroke();
 spot.x = random(0,width);
 spot.y = random(0,height);
  Size = random(10,40);
  if(spot.x < width /2)
    fill(Color.r, Color.g, Color.b,150);
  else 
    fill(0, 0, 255,150);
  ellipse(spot.x,spot.y,Size,Size);
  
}

function keyPressed()
{
  if(keyCode == DOWN_ARROW)
  background(0,255,0);
}