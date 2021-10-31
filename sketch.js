var shipImg , shipImg1 , sea;

function preload(){
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
shipImg1 = loadImage("sea.png");
shipImg1.addImage(shipImg);
}

function setup(){
  createCanvas(400,400);
 sea = createSprite(200,180,400,20);
    sea.addImage("ground");
    sea.x = ground.width /2;
    sea.velocityX = -4;
}

function draw() {
  background("blue");

  if ( sea.x < 0){
    sea.x = sea.width/2;
  }

}