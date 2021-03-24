var snake;
var food;

var indent = 0;
var score = 0;

function numberOfDigits(num){
	var count = 0;
	while(num != 0){
		num = floor (num/10);
		++count;
	}
	return count;
}


function setup() {
  createCanvas(600,500);
  frameRate(10);
  snake = new Snake();
  //food = new createVector(random(width), random(height));
  pickLocation();
  
}



function draw() {
  background(51);
  
  snake.death();
  snake.update();
  snake.display();
  
  if(snake.eat(food)){
  	score += 50;
  	pickLocation();
  	//console.log(food.x, food.y);
  }
  
  fill(100,200,255);
  rect(food.x , food.y, scl, scl);
  
  textSize(20);
  fill(255,200,150);
  noStroke();
  
  //indent = scoreDigit(100, 0);
  //console.log(scoreDigit(45));
  if(score <= 0)
     indent = 0;
  if(score >= 10000)
     indent = (numberOfDigits(score) - 4 )*20;
  textSize(35);
  noStroke();
  fill(0,0,255);
  text("score : " + score, 400 - indent , 30 );
  console.log(numberOfDigits(score));
}

function pickLocation(){
	var cols = height/scl;
	var rows = width/scl;
	food = new createVector(floor(random(rows)), floor(random(cols)) );
	
	food.mult(scl);
}

var moveLeft = false;
var moveRight = true;
var moveUp = true;
var moveDown = true;

function keyPressed(){
	
	if(snake.xspeed > 0){
	    moveLeft = false;
	    moveRight = moveUp = moveDown = true;
	}
	else if(snake.xspeed < 0){
	    moveRight = false;
	    moveLeft = moveUp = moveDown = true;
	}
	else if(snake.yspeed > 0){
	    moveUp = false;
	    moveRight = moveLeft = moveDown = true;
	}
	else if(snake.yspeed < 0){
	    moveDown = false;
	    moveRight = moveUp = moveLeft = true;
	}
	
	if(keyCode == LEFT_ARROW && moveLeft){
		 snake.dir(-1,0);
		 //moveRight = false;
		 //moveUp = moveDown = true;
	}
	else if(keyCode == RIGHT_ARROW && moveRight){
		 snake.dir(1,0);
		 //moveLeft = false;
		 //moveUp = moveDown = true;
	}
	else if(keyCode == DOWN_ARROW && moveDown){
		snake.dir(0,1);
		//moveLeft = moveRight = true;
		//moveUp = false;
	}
	else if(keyCode == UP_ARROW && moveUp){
		snake.dir(0,-1);
		//moveLeft = moveRight = true;
		//moveDown = false;
	}
	
	
	   
	
}