
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	//Create the Bodies Here.
	snake1=new Snake(500,500,10,100)


}

function draw() {
  rectMode(CENTER);
  background(0);
   snake1.display();
  drawSprites();
 
}



