var space,spaceImg;
var asteroid,figtherJet;
var asteroidImg,fighterJetImg;

function preload(){
  spaceImg = loadImage("background.jpg");
  asteroidImg = loadImage("Asteroids.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-100);
  space = createSprite(displayWidth/2,displayHeight/2);
  space.addImage("spaceImg",spaceImg);
  space.scale = 3;
  space.velocityY = 1;
}

function draw() {
  background(0);  
  if(space.y>(displayHeight-200)){
    space.y = displayHeight/2;
  }
  spawnAsteroid();
  drawSprites();
}

function spawnAsteroid(){
  if(frameCount % 60 === 0){
    asteroid = createSprite(400,30,30,30);
    asteroid.velocityY = 6;
    Math.round(random(1,6));
    asteroid.addImage("asteroidImg",asteroidImg);
    asteroid.scale = 0.5;
  }
}