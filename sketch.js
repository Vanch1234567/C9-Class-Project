//Use Right Arrow key to change background colour to red.
//Use Left Arrow key to change background colour to pink.
//Use Up Arrow key to change background colour to yellow.
//Use Down Arrow key to change background colour to green.
var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background("blue");
if(keyIsDown(RIGHT_ARROW)){
  background("red")
}
if(keyIsDown(UP_ARROW)){
  background("yellow");
}
if(keyIsDown(DOWN_ARROW)){
  background("green");
}
if(keyIsDown(LEFT_ARROW)){
  background("pink");
}
drawSprites()
}




