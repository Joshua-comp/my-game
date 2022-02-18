
var brinjalImg,carrotImg,tomatoImg,groundImage,ground




function preload(){
groundImage = loadImage("assets/bg.jpg");
brinjalImg = loadImage("assets/brinjal.jpg");
 carrotImg= loadImage("assets/carrot.jpg");
 tomatoImg= loadImage("assets/tomato.jpg");

  
  

}

function setup() {
 createCanvas(600, 400);
  
 
  
 // ground = createSprite(300,200);
  //ground.addImage("ground",groundImage);
  //ground.x = ground.width /2;
 //ground.scale=0.5
  
  
}

function draw() {
  //trex.debug = true;
  background(100);
  //vegetable()
  spawnClouds()
  drawSprites();
 
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
   // cloud.depth = ground.depth+1
    cloud.y = Math.round(random(80,120));
    cloud.addImage(tomatoImg);
    cloud.scale = 0.1;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
   // trex.depth = trex.depth + 1;
    
    //add each cloud to the group
   // cloudsGroup.add(cloud);
  }
  
}

function vegetable() {
  if(frameCount % 60 === 0) {
    var vegetables = createSprite(Math.round(random(10,590)),-20,10,20);
    //obstacle.debug = true;
    vegetables.velocityY=-2;
    
    //generate random obstacles
   var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: vegetables.addImage(brinjalImg);
              break;
      case 2: vegetables.addImage(tomatoImg);
              break;
      case 3:  vegetables.addImage(carrotImg);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    vegetables.scale = 0.2;
    vegetables.lifetime = 300;
    //add each obstacle to the group
    //obstaclesGroup.add(obstacle);
  }

}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
 
  
  score = 0;
  
}