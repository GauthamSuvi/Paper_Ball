
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var floor;
var wallL, wallR;
var canL, canR;
var canU;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rectMode(CENTER);
	ellipseMode(RADIUS);

	var ball_options={
		restitution: 0.0000001,
		friction: 0,
		density:1.2
	}

	ball=Bodies.circle(100,400,10,ball_options);
	World.add(world,ball);

	floor = new Ground(400,600,800,30);
	wallL = new Ground(10,150,30,900);
	wallR = new Ground(690,150,30,900);
	canL = new Ground (300,550,20,250);
	canR = new Ground (600,550,20,500);
	canU = new Ground (400,300,500,50);

	Engine.run(engine);
  
}


function draw() {
	background(51);
	ellipse(ball.position.x,ball.position.y,30);
	floor.show();
	canL.show();
	canR.show();
	wallL.show();
	wallR.show();
	canU.show();
	Engine.update(engine);
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if(keyIsDown (UP_ARROW)){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.55,y:0.25});
			console.log("jumping")
	}

}


