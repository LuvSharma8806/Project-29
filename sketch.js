const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var ground;

function setup() {
 var canvas=createCanvas(1200,400);

 engine = Engine.create();
 world = engine.world;

 ground=new Ground(300,300,50,50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  ground.display();
}