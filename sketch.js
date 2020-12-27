const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = []; 
var ground; 

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <= width - 10; j=j+50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <= width - 10; j=j+50) {
    plinkos.push(new Plinko(j, 375));
  }



  ground = new Ground(400,790,800,20);
}

function draw() {
  background(0);  
  Engine.update(engine);

  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for ( var j = 0; j < plinkos.length; j++) {
    plinkos[j].display()
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  ground.display();
}