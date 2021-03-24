function Pipe(x1,y1 , x2, y2){
	this.x = x1, this.y = y1;
	this.x = x2, this.y = y2;
	this.w = 30, this.h1 = random(50,height/2);
	this.h2 = height - y2;
	
	
	this.show =function(){
		rect(x1,y1,this.w, this.h1);
		rect(x2, y2, this.w, this.h2);
	}
	
	this.update = function(){
		x1 -= 3;
		x2 -= 3;
	}
	
	this.offScreen = function(){
		if(x1 + this.w < 0 && x2 + this.w < 0)
		    return true;
		 return false;
	}
}