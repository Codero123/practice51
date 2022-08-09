var bg,bg2,form,system,code,security,secondlevel;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  system = new System()
  security = new Security()
}

function draw() {

  if (score < 10) {
  background(bg);

  clues();
  security.display();
  push();
  textSize(40);
  fill("white");
  strokeWeight(8);
  stroke("black");
  text("Score: " + score + " / 10", windowWidth-900, windowHeight-700);
  pop();
  push();
  textSize(30);
  fill("white");
  strokeWeight(6);
  stroke("black");
  text("RULES:", windowWidth-350, windowHeight-700);
  text("Answer all questions correctly to get", windowWidth-600, windowHeight-650);
  text("through the vault and get the treasure.", windowWidth-600, windowHeight-600);
  pop();
  }
  else if(score === 10) {
    clear();
    background(bg2);
    textSize(100);
    fill("white");
    strokeWeight(25);
    stroke("black");
    text("TREASURE UNLOCKED!", windowWidth-1350, windowHeight-350);
  }

  drawSprites()
}