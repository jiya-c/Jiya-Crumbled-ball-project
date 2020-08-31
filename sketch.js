var circle;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage=loadImage("dustbingreen.png");
	  
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,350,800,15);
	paper=new Paper(150,200,20,25);
    dustbin=new Dustbin(580,340,150,10);
	line=new Dustbin(504,295,10,100);
	right =new Dustbin(649,295,10,100);
	Engine.run(engine);
  
}


function draw() {
  
  background(550);
  text(mouseX+","+mouseY,mouseX,mouseY);

  ground.display();
 paper.display();
 dustbin.display();
 line.display();
 right.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

		
	}
}


