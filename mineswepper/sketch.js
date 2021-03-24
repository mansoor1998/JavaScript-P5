var scl = 40;
var grid = [];
var rows, cols;

function setup(){
	createCanvas(521,521);
	rows = floor(width/scl);
	cols = floor(height/scl);
	for(var j = 0; j < rows; j++){
		for(var i = 0; i < cols; i++){
		   grid.push(new Cell(i,j));		
		}
	}
	console.log(rows + " " + cols);
	grid[0].DrawMines();
	grid[0].setLocations();
}

function draw(){
  background(255); 	
  for(var i = 0; i < grid.length; i ++){
	  grid[i].show();
  }
}
//i*row + j
function mousePressed(){
   var i = floor(mouseX/scl);
   var j = floor(mouseY/scl);
	//console.log(i + " " + j);
	if(i >= 0 && i <= rows - 1 && j >= 0 && j <= cols - 1){
		if(!grid[j*rows + i].reveled)
	        grid[j*rows + i].clicked(i,j);
	}
}

function Cell(i,j){
	this.i = i;
	this.j = j;
	this.reveled = false;
	this.Mine = false;
	this.Number = 0;
	
	
	this.show = function(){
		var x = i*scl;
		var y = j*scl;
		if(this.reveled){
		   noFill();
		   stroke(0);
		   rect(x,y,scl,scl);
		   
		   if(this.Number > 0){
			   fill(255);
			   textSize(30);
			   text(this.Number, x+scl/2 - 7 ,y+scl/2 + 10 );
		   }
			
		   if(this.Mine){
			  ellipse(x + scl/2,y + scl/2, 20, 20);   
		   }
		}
		else {
		   fill(200);
		   rect(x,y,scl,scl);
		}
	}
	
	this.clicked = function(i,j){
		       var index = 0;
		       this.reveled = true;
		       
		       if(this.Mine){
				   for(var k = 0; k < grid.length; k ++){
					   grid[k].reveled = true;
				   }
				   console.log("GAME OVER!");
				   return;
			   }
		
		       if(grid[j*rows + i].Number > 0 || grid[j*rows + i].Mine){
				   return;
			   }
		       console.log("Hello");
		        index = (j-1)*rows + i;
			    if(i >=0 && i <= rows - 1 && j-1 >= 0 && j-1 <= cols-1 && !grid[index].reveled){
				    grid[index].clicked(i,j-1);
			    }
			    index = (j+1)*rows + i;
			    if(i >=0 && i <= rows-1 && j+1 >= 0 && j+1 <= cols-1 && !grid[index].reveled){
				    grid[index].clicked(i,j+1);
			    }
			    index = (j+1)*rows + (i+1);
			    if(i+1 >=0 && i+1 <= rows-1 && j+1 >= 0 && j+1 <= cols-1 && !grid[index].reveled){
				    grid[index].clicked(i+1,j+1);
			    }
			    index = (j)*rows + (i-1);
			    if(i-1 >=0 && i-1 <= rows-1 && j >= 0 && j <= cols-1 && !grid[index].reveled){
				    grid[index].clicked(i-1, j);
			    }
			    index = (j)*rows + (i+1);
			    if(i+1 >=0 && i+1 <= rows-1 && j >= 0 && j <= cols-1 && !grid[index].reveled){
				    grid[index].clicked(i+1,j);
			    }
			    index = (j-1)*rows + (i-1);
			    if(i-1 >=0 && i-1 <= rows-1 && j-1 >= 0 && j-1 <= cols-1 && !grid[index].reveled){
				    grid[index].clicked(i-1, j-1);
			    }
			    index = (j+1)*rows + (i-1);
			    if(i-1 >=0 && i-1 <= rows-1 && j+1 >= 0 && j+1 <= cols-1 && !grid[index].reveled){
				    grid[index].clicked(i-1, j+1);
			    }
			    index = (j-1)*rows + (i+1);
			    if(i+1 >=0 && i+1 <= rows-1 && j-1 >= 0 && j-1 <= cols-1 && !grid[index].reveled){
				    grid[index].clicked(i+1, j-1);
			    }
	}
	
	
	this.setLocations = function(){
	  var index = 0;
	  for(var j = 0; j < rows; j ++){
		  for(var i = 0; i < cols; i ++){
			  if(!grid[j*rows + i].Mine){
			    index = (j-1)*rows + i;
			    if( (i >= 0 && i<=rows-1 && j-1 >= 0 && j-1 <= cols) && grid[index].Mine ){
				    ++grid[j*rows + i].Number;
			    }
			    index = (j+1)*rows + i;
			    if((i >= 0 && i<=rows-1 && j+1 >= 0 && j+1 <= cols-1) && grid[index].Mine){
				    ++grid[j*rows + i].Number;
			    }
			    index = (j+1)*rows + (i+1);
			    if((i+1 >= 0 && i+1<=rows-1 && j+1 >= 0 && j+1 <= cols-1) && grid[index].Mine){
				    ++grid[j*rows + i].Number;
			    }
			    index = (j)*rows + (i-1);
			    if((i-1 >= 0 && i-1<=rows-1 && j >= 0 && j <= cols-1)  && grid[index].Mine){
				    ++grid[j*rows + i].Number;
			    }
			    index = (j)*rows + (i+1);
			    if((i+1 >= 0 && i+1 <=rows -1 && j >= 0 && j <= cols-1) && grid[index].Mine){
				    ++grid[j*rows + i].Number;
			    }
			    index = (j-1)*rows + (i-1);
			    if((i-1 >= 0 && i-1<=rows-1 && j-1 >= 0 && j-1 <= cols-1)  && grid[index].Mine){
				    ++grid[j*rows + i].Number;
			    }
			    index = (j+1)*rows + (i-1);
			    if((i-1 >= 0 && i-1<=rows-1 && j+1 >= 0 && j+1 <= cols-1) && grid[index].Mine){
				    ++grid[j*rows + i].Number;
			    }
			    index = (j-1)*rows + (i+1);
			    if((i+1 >= 0 && i+1<=rows-1 && j-1 >= 0 && j-1 <= cols-1)  && grid[index].Mine){
				    ++grid[j*rows + i].Number;
			    }
			  }
			  
			  //console.log("index: " +  (j*rows + i) + " Number: " + " " + grid[j*rows + i].Number);
		  }
	  }
	}
	
	
	this.DrawMines = function(){
		
		var value = 0;
		while(value < 10){
			var index = floor(random(rows*cols - 1));
			if(!grid[index].Mine){
				grid[index].Mine = true;
				value++;
			}
		}
	}
	
	
}