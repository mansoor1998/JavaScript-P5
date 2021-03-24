function Bird(){
	this.y = height/2, this.x = 64;
	this.d = 30;
	
	this.gravity = 0.8;
	this.velocity = 0;
	
	this.show = function(){
		noStroke();
		fill(255);
		ellipse(this.x , this.y, this.d, this.d);
	}
	
	this.up = function(){
		this.velocity = -15;
	}
	
	this.update = function(){
	  this.velocity += this.gravity;
	  this.y += this.velocity;
	  if(this.y >= height){
	  	this.y = height;
	  	this.velocity = 0;
	  }
	  if(this.y < 0){
	  	this.y = 0;
	  	this.velocity += 1;
	  }
	}
}