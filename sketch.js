var astronaut;
var bg;
var sleep, brush, gym1, gym2, eat, drink, move, bath;
var edges;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym1 = loadAnimation("images/gym1.png", "images/gym2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  //move = loadAnimation("images/move.png", "images/move1.png");
  move = loadAnimation("images/move.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
}

function setup() {
  createCanvas(600, 500);

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  //Set the background image
  background(bg);
  drawSprites();

  //Adding instructions
  fill("white");
  stroke("white");
  textSize(20);
  text("Instructions: ", 20, 21);

  textSize(15);
  fill("white");
  stroke("white");
  
  text("Up Arrow = Brushing ", 20, 41);
  
  text("Down Arrow = Gymming 1 (Running) ", 20, 61);

  text("Left Arrow = Eating ", 20, 81);

  text("Right Arrow = Bathing ", 20, 101);

  text("Space Bar = Sleeping ", 20, 121);

  text("M Key = Moving ", 20, 141);

  text("N Key = Gymming 2 (Cardio)", 20, 161);

  text("Shift Key = Drinking", 20, 181);

  //Bounce The astronaut off the edges
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  //Making the instructions work
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming1", gym1);
    astronaut.changeAnimation("gymming1");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 1.5;
    astronaut.velocityY = 1.5;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 250;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if (keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    //astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }


  if (keyDown("n")){
    astronaut.addAnimation("gymming2", gym2);
    astronaut.changeAnimation("gymming2");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("SPACE")){
    astronaut.addAnimation("sleeping", sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("SHIFT")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 2;
    astronaut.velocityY = 2;
  }
}