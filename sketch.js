
var bg,sleep,brush,gym,eat,drink,move,bath;
var astronaut;
var bgImg;


function preload(){
  bgImg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadAnimation("gym1.png","gym2.png",);
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move2.png");
  bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);


bg=createSprite(400,200,50,50);
bg.addImage("background",bgImg);

astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping", sleep);
astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);
  
  textSize(20);
fill(255);
text("Up Arrow = Brushing",150,200);
text("Down Arrow = Gymming",180,200);
text("Left Arrow = Eating",210,30);
text("Down Arrow = Bathing",230,30);
text("M Key = Moving",260,30);

  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing", brush);
    astronaut.changeImage("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 2;
    astronaut.velocityY = -2;
  }
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  drawSprites();
}