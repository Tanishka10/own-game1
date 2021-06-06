var car ;

function preload(){

  cari=loadImage("image1.png");
  track=loadImage("track.png");
}

function setup(){
createCanvas(1200,900);

  car= createSprite(100,800,100,20);
  car.addImage("pc",cari);
  car.scale=0.5;

  ground=createSprite(600,800,900,20);
  ground.x=ground.width/2;
  ground.addImage("track",track);
  ground.velocityX=-5;


}

function draw(){

  background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  drawSprites();
}