const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];
score = 0;
function preload(){

}

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 10);
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, 630, 10, divisionHeight))
  }

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75, 12));
  }

  for (var j = 15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,175, 12));
  }

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275, 12));
  }

  for (var j = 15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,375, 12));
  }

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 12));
    score++;
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  drawSprites();
}

