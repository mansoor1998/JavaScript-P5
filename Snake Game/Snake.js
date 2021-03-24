var scl;
var scl = 20;

function Snake(){
	this.x = 0;
	this.y = 0;
	
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	
	this.death = function(){
		for(var i =0; i < this.tail.length; i ++ ){
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if(d < 1){
			   this.total = 0;
			   this.tail = [];
			   score = 0;
			}
		}
	}
	
	this.eat = function(pos){
		var d = dist(this.x, this.y, pos.x, pos.y);
		if(d < 1){
           this.total++;
		   return true;
        }
		else 
		   return false;
	}
	
	this.dir = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}
	
	this.update = function(){
     //if(this.total === this.tail.length){
     	for(var i =0; i < this.tail.length -1; i ++){
			 this.tail[i] = this.tail[i+1];
		  }
     //}   
    this.tail[this.total - 1] = new createVector(this.x, this.y); 
        
		this.x += this.xspeed*scl;
		this.y += this.yspeed*scl;
		
		if(this.x < 0)
		   this.x = width -20;
		if(this.x > width - 20)
		    this.x = 0;
		if(this.y < 0)
		   this.y = height - 20;
		if(this.y > height)
		    this.y = 0; 
		//this.y = constrain(this.y, 0, height-20);
   
	}
	
	this.display = function(){
		fill(255);
		stroke(0);
    for(var i = 0; i < this.tail.length; i++){
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
        fill(255);
        rect(this.x, this.y, scl, scl);
		
	}
	
	
}