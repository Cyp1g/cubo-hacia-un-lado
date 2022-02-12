var cubo;

function setup() {
  createCanvas(2000,1000);
  cubo = createSprite(500,700,200,200);
cubo.shapecolor = "blue";
}


function draw() 
{
  background("red");
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    cubo.position.x += 3;
  }

}




