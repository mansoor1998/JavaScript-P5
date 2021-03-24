var scl =  40;
var rows, cols;
var grid = [];
var Stack = [];
var current;


function setup() {
  createCanvas(400, 400);
  //frameRate(1);
  cols = floor(width/scl);
  rows = floor(height/scl);
  frameRate(30);
  for(var j = 0; j < rows; j++){
  	for(var i = 0; i < cols; i ++){
  	  var cell = new Cell(i,j);
  	  grid.push(cell);
  	}
  }
  
  current = grid[0];
  current.visited = true;
  Stack.push(current);
}

function draw() {
  background(51);
  
  for(var index = 0; index < grid.length; index++){
  	  grid[index].show();
  }
  
  
  
  // STEP 1
  var next = current.checkNeighbors();
  current.highlight();
  if(next){
  	next.visited = true;
  	
  	//STEP 3
  	removeWalls(current, next);
  	//STEP 4
  	current = next;
  	Stack.push(current);
  }else if(Stack.length > 0){
	current.R = 255;
	current.G = 0;
    current = Stack.pop();	
  }
	
  for(var i = 0; i < Stack.length; i ++){
	  Stack[i].R = 255;
	  Stack[i].G = 0;
  }
  
}




function index(i, j){
	
	if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1){
	 return -1;
	}
	 
	return i + j*cols;
	
}


function Cell(i,j){
	this.i = i;
	this.j = j;
	             // Top, right, bottom, Left
	this.walls = [true, true, true, true];
	
	this.visited = false;
	
	this.R = 255;
	this.G = 0;
	
	this.highlight = function(){
		var x = this.i*scl;
		var y = this.j*scl;
  	   	fill(100,60,255);
  	   	noStroke();
  		rect(x,y,scl,scl);
	}
	
	this.checkNeighbors = function(){
		
		var neighbors = [];
		
		var top = grid[index(i,j-1)];
		var right = grid[index(i + 1, j)];
		var bottom = grid[index(i, j + 1)];
		var left = grid[index(i-1, j)];
		
	
		
		if(top && !top.visited){
		   neighbors.push(top);
		}
		if(right && !right.visited){
		   neighbors.push(right);
		}
		if(bottom && !bottom.visited){
		   neighbors.push(bottom);
		}
		if(left && !left.visited){
		   neighbors.push(left);
		}
		
		
		if(neighbors.length > 0){
			var r = floor(random(0, neighbors.length));
			return neighbors[r];
		}
		else {
			return undefined;
		}
	}
	
  this.show = function(){
  	var x = this.i*scl;
  	var y = this.j*scl;
  	
  	stroke(255);
	  
	 
  	
  	// Top
  	if(this.walls[0]){
  	   line(x,y,x+scl,y);
  	}
  	// Right
  	if(this.walls[1]){
  	   line(x+scl, y , x+scl, y + scl);
  	}
  	//Bottom
  	if(this.walls[2]){
  	   line(x + scl, y + scl, x, y + scl);
  	}
  	//Left
  	if(this.walls[3]){
  	   line(x,y+scl,x, y);
  	}
  	   
  	 if(this.visited){   
  	   fill(this.R, this.G, 0, 100);
  	   noStroke();
  	   rect(x,y,scl,scl);
  	}
  	   
  }
}




function removeWalls(a,b){
  var x = a.i - b.i;
  var y = a.j - b.j;
  if(x === 1){
      	a.walls[3] = false;
      	b.walls[1] = false;
  }
  if(x === -1){
  	a.walls[1] = false;
  	b.walls[3] = false;
  }
  if(y === 1){
  	a.walls[0] = false;
  	b.walls[2] = false;
  }
  if(y === -1){
  	a.walls[2] = false;
  	b.walls[0] = false;
  }
  
}


