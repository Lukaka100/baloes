var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  balaovermelho = loadImage("red_balloon0.png");
  balaoazul = loadImage("blue_balloon0.png");
  balaoverde = loadImage("green_balloon0.png");
  balaorosa = loadImage("pink_balloon0.png");
}

function setup() {
  createCanvas(400, 400);

  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);

    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();
  }
   
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1:redBalloon()
    break;
    case 2:blueBalloon()
    break;
    case 3:greenBalloon()
    break;
    case 4:pinkBalloon()
    break;
    default:break;
  }
}
  drawSprites();
}

 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(balaovermelho);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(balaoazul);
  azul.velocityX = 3
  azul.lifetime = 150
  azul.scale = 0.1
}

function greenBalloon() {
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(balaoverde);
  verde.velocityX = 3
  verde.lifetime = 150
  verde.scale = 0.1
}

function pinkBalloon() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(balaorosa);
  rosa.velocityX = 3
  rosa.lifetime = 150
  rosa.scale = 0.1
}
