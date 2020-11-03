const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box;
var ground, ground2, ground3, ground4, obstacle, obstacle2, obstacles;
var c1, c2, c3;


var engine, world, body;
var canJump;

var charges;

function setup() {
  //create the canvas
  createCanvas(1200,400);
  
  //setup
  engine = Engine.create();
  world = engine.world;
  boxes = [];
  obstacles = [];
  charges = 2;

  //create boxes
  box1 = new Box(100, 360, 25);

  //create the floor
  ground = new Ground(600, 390, 1200, 30, 0, 0);
  ground2 = new Ground(600, 10, 1200, 30, 0, 0);
  ground3 = new Ground(0, 200, 20, 400, 0, 0);
  ground4 = new Ground(1200, 200, 20, 400, 0, 0);

  c1 = new Cup(1160, 330, 30, 60);
  c2 = new Cup(1080, 330, 30, 60);
  c3 = new Cup(1120, 360, 100, 30);

  for(var x = 200; x < 1100; x+=100){
    if(x >= 500 && x <= 700){
      obstacle = new Ground(x, 400, 100, random(50, 200), 0, 1);
    }else{
      obstacle = new Ground(x, 400, 100, random(150, 400), 0, 1);
    }
    obstacle2 = new Ground(x, 0, 100, random(100, 200), 180, 1);
    obstacles.push(obstacle);
    obstacles.push(obstacle2);
  }
}

function draw() {
  //set the background
  background(50,50,55);  

  //update the engine
  Engine.update(engine);
  
  //display ground
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();

  c1.display();
  c2.display();
  c3.display();

  box1.display(100, 100, 100);

  for(var x = 0; x < obstacles.length; x++){
    obstacles[x].display();
  }

  if(frameCount % 80 === 0 && charges !== 2){
    charges += 1;
  }

  fill("white");
  textSize(20);
  text("            Throw away your trash!\nHit the left, right, and up arrows to toss it!", 450, 200);
  text("Moves: " + charges, 20, 50);
}

function keyPressed(){
 if(keyCode === 39 && charges > 0){
  box1.flingForward();
  charges--;
 }
 if(keyCode === 38 && charges > 0){
  box1.flingUp();
  charges--;
 }
 if(keyCode === 37 && charges > 0){
  box1.flingBack();
  charges--;
 }
}
