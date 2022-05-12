var ground, trex;
var ground_image, trex_runing, trex_colided;

function preload() {
  ground_image = loadImage("ground2.png");
  trex_runing = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}

function setup() {
  createCanvas(600, 200);

  ground = createSprite(300, 180, 600, 5);
  ground.addImage(ground_image);
  ground.velocityX = -5;

  trex = createSprite(50, 180, 20, 40);
  trex.addAnimation("runing_trex", trex_runing);
  trex.scale = 0.4;

}

function draw() {
  background("aqua");

  trex.collide(ground);

  if (keyDown("space")) {
    trex.velocityY = -6;
  }

  trex.velocityY = trex.velocityY + 0.5;

  if (ground.x < 0) {
    ground.x = 300;
  }




  drawSprites();
}







