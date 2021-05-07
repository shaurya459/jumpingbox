var canvas;
var music;
var redBox,limeBox,yellowBox,cyanBox,movingBox;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    redBox=createSprite(500,590,200,15);
    redBox.shapeColor="red";
    limeBox=createSprite(700,590,200,15);
    limeBox.shapeColor="lime";
   yellowBox=createSprite(300,590,200,15);
   yellowBox.shapeColor="yellow";
   cyanBox=createSprite(100,590,200,15);
   cyanBox.shapeColor="cyan"
    //create box sprite and give velocity
    movingBox=createSprite(600,300,15,15)
    movingBox.velocityX=3;
    movingBox.velocityY=3;
  
}

function draw() {
    background(rgb(169,169,169));    
drawSprites()
if(movingBox.x<0){
    movingBox.velocityX=3
}else if(movingBox.x>800){
    movingBox.velocityX=-3
}
if(movingBox.y<0){
movingBox.velocityY=3
}


//add condition to check if box touching surface and make it box
if(redBox.isTouching(movingBox) && movingBox.bounceOff(redBox)){
movingBox.shapeColor="red";
}
if(yellowBox.isTouching(movingBox) && movingBox.bounceOff(yellowBox)){
    movingBox.shapeColor="yellow";
}
if( cyanBox.isTouching(movingBox) && movingBox.bounceOff( cyanBox)){
    movingBox.shapeColor=" cyan";
    }
    if( limeBox.isTouching(movingBox) && movingBox.bounceOff( limeBox)){
        movingBox.shapeColor=" lime";    
}
}