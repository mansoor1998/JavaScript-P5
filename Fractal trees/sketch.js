var root;
var tree = [];
var leaves = [];

function setup() {
  createCanvas(400,400);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height - 100);
  tree[0] = new Branch(a,b);
  //tree[1] = tree[0].branchA();
  //tree[2] = tree[0].branchB();
  //root = new Branch(a,b);
}

var count = 0;

function mousePressed(){
	for(var index = tree.length -1; index >= 0; index--){
		if(!tree[index].finished){
		    tree.push(tree[index].branchA() );
		    tree.push(tree[index].branchB() );
		    
		}
		count++;
		tree[index].finished = true;
	}
}


function draw() {
  background(51);
  if(count == 5)
  {
  	for(var i = 0; i < tree.length; i ++){
  		if(!tree[i].finished){
  			var leaf = tree[i].end.copy;
  			leaves.push(leaf);
  		}
  	}
  }
  for(var i = 0; i < tree.length; i ++){
  	tree[i].show();
  }
  if(count == 5){
  	for(var i = 0; i < leaves.length; i ++){
  		ellipse(leaves.x , leaves.y, 4,4);
  	}
  }
  
}