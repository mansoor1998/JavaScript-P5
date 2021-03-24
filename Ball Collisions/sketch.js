function Circle(x,y){
	this.x = x;
	this.y = y;
	var value = random(1);
	if(value < 0.5){
	    this.xSpeed = random(2,4);
	    this.ySpeed = random(-3,-4);
	}
	else{
		this.xSpeed = random(-2,-4);
		this.ySpeed = random(3,4);
	}
	
	this.radius = 10;
	
  this.show = function(){
  	fill(255);
  	noStroke();
  	ellipse(this.x, this.y, 20, 20);
  }
  
  this.update = function(){
  	this.x += this.xSpeed;
  	this.y += this.ySpeed;
  	
  	
  	if(this.x > width - this.radius || this.x < 0 + this.radius){
  		this.xSpeed = -this.xSpeed;
  	}
  	
  	if(this.y > width - this.radius || this.y < 0 + this.radius){
  		this.ySpeed = -this.ySpeed;
  	}
  }
  
  this.collision = function(bubble){
  	var d = dist(this.x, this.y, bubble.x , bubble.y);
  	if(d < this.radius + bubble.radius - 2){
  		this.xSpeed = -this.xSpeed;
  		bubble.xSpeed = - bubble.xSpeed;
  	}
  }
}

var ball = [];

function mousePressed(){
	ball.push(new Circle(mouseX , mouseY) );
}

function setup() {
  createCanvas(400, 400);
  //for(var i = 0; i < 0; i ++){
  	//ball.push(new Circle(random(width) , random(height)));
  //}
}

function draw() {
  background(51);
  
  for(var i = 0; i < ball.length - 1; i ++){
  	for(var j = i+1; j < ball.length; j ++){
  		if(i != j)
  		ball[i].collision(ball[j]);
  	}
  }
  
  for(var i = 0; i < ball.length; i ++){
  	ball[i].update();
  	ball[i].show();
  }
  
  
  
}