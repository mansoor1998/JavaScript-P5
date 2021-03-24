var x, y;
var totalPoints = 1000,
  angle = 0;
var Points = [];
var Multiple = 50;

function setup() {
  createCanvas(600, 600);
  background(51);
  for (var i = 0; i < totalPoints; i++) {
    ConvertPoint(angle);
    Points[i] = new createVector(x, y);
    angle += 360 / totalPoints;
  }
  //totalPoints++;

  frameRate(20);
}

function PushPoint() {
  for (var i = 0; i < totalPoints; i++) {
    ConvertPoint(angle);
    Points[i] = new createVector(x, y);
    angle += 360 / totalPoints;
  }
  totalPoints++;
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  strokeWeight(1);
  //ellipse(0,0,500,500);
  //PushPoint();
  //SetLines();
  ConnectPoints();
  //display();
  //console.log(Multiple);
  /*if(Multiple == Points.length){
    PushPoint();
    Multiple = 2;
  }*/
  //console.log(totalPoints);
  //noFill();
  //ellipse(0,0, 300 , 300);
}

function ConnectPoints() {
  for (var i = 1; i < Points.length; i++) {
    let anotherPoint = floor(i * Multiple) % Points.length;
    //console.log(anotherPoint);
    stroke(0, 255, 0);
    strokeWeight(0.5);
    line(
      Points[i].x,
      Points[i].y,
      Points[anotherPoint].x,
      Points[anotherPoint].y
    );
  }
  //if(Multiple < 99)
  Multiple += 0.1;
}

// function SetLines(){
// 	stroke(0,255,0);
// 	strokeWeight(1);
// 	for(var i =0; i< Points.length-1; i ++){
// 		line(Points[i].x, Points[i].y , Points[i+1].x, Points[i+1].y);
// 	}
// 	line(Points[i].x,Points[i].y,Points[0].x,Points[0].y);
// }

function ConvertPoint(distance) {
  y = 250 * Math.sin((distance * PI) / 180);
  x = 250 * Math.cos((distance * PI) / 180);
}

function display() {
  for (var i = 0; i < Points.length; i++) {
    stroke(0);
    strokeWeight(5);
    //noStroke();
    point(Points[i].x, Points[i].y);
  }
}
