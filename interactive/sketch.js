function setup() {
 createCanvas(800,600); 
}

function draw() {
  frameRate(20);
  
  if(mouseIsPressed){
     fill(0);
  } else {
    fill(300);
  }
  ellipse(mouseX,mouseY,20,20);
  
  	if (keyIsPressed === true) {
      fill(255,54,6);

    }
}