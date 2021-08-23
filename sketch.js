var garden,rabbit,apple,orangeleaves;
var gardenImage,rabbitImage,appleImage,orangeleavesImage;

function preload(){
  gardenImage=loadImage("garden.png");
  rabbitImage=loadAnimation("rabbit.png");
  appleImage=loadImage("apple.png");
  orangeleavesImage=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);

  garden=createSprite(200,200);
  garden.addImage("garden",gardenImage);

  rabbit=createSprite(200,250);
  rabbit.addAnimation("rabbit",rabbitImage);
  rabbit.scale=0.1;
}

function draw() {
  background(0);
  rabbit.x=World.mouseX;

  spawnApples();
  spawnLeaves();

  drawSprites();
}

var select_sprites=Math.round(random(1,2));

if(frameCount%80==0){
  if(select_sprites==1){
  function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage("apple",appleImage);
  apple.scal
 }
  }
}