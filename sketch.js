function setup() {
  createCanvas(400, 400);
  background("blue");
  
}

function draw() {
  
 
  fill("green");
  stroke("red");//cor da borda
  
  if(mouseIsPressed){
     rect(mouseX,mouseY,25,25);
    
  }
  
  
  
}
