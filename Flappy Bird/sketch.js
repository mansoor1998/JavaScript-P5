var bird;
var pipes = []

function setup() {
  createCanvas(400,600);
  bird = new Bird();
  //pipe = new Pipe(width , 0, width, random(height/2, height));
  pipes.push(new Pipe(width , 0, width, random(height/2, height) ) );
}

function draw() {
	background(51);
	bird.update();
	bird.show();
	
	if(frameCount % 70 === 0){
	   	 pipes.push(new Pipe( width , 0, width, random(height/2, height) )); 
	}
	
	//console.log(pipes.length);
	for(var i = pipes.length - 1; i >= 0; i--){
	   pipes[i].update();
	   pipes[i].show();
	   
	   if(pipes[i].offScreen()){
	   	  pipes.splice(i,1);
	   }
	}
	
}

function keyPressed(){
	if(key == ' '){
		bird.up();
	}
}

