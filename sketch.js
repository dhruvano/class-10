
var trex ,trex_running;
var ground, invisibleGround, ground_img;
function preload(){
  trex_running= loadAnimation("trex1.png", "trex3.png","trex4.png")
ground_img= loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
   trex= createSprite(50,180,20,50)
   trex.addAnimation("running", trex_running);
   trex.scale = 0.5;
   trex .x=50;

   //create ground Sprite
   ground = createSprite(200,180,400,20); 
   ground.addImage("ground", ground_img)
   ground.x= ground.width/2
}

function draw(){
  background("white")
  drawSprites();
  
ground.velocityX=-2
console.log(ground.x);

if (ground.x<0){
  ground.x = ground.width/2;
}

//jumping trex
if (keyDown("space")){
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8
trex.collide(ground)
}
                             