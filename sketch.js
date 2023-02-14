const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var ball;
var rope;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope=new Rope(20,{x:250,y:50});

var ball_options={
  density:0.01,

}

  ball = Bodies.circle(50, 50, 40,ball_options);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(ball.position.x,ball.position.y, 20, 20);
  
  Engine.update(engine);

}
