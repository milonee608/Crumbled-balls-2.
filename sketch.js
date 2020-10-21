
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball;

function preload()
{
	dustbin=loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1= new Dustbin(560,height-50,200,20);
	World.add(world,box1);
	box2= new Dustbin(450,height-120,20,160);
	World.add(world,box2);
	box3= new Dustbin(650,height-120,20,160);
	World.add(world,box3)

	ground = new Ground(400,670,800,10)
	
	
	
	ball=new Ball(150,640,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);

  Engine.update(engine);
 
  background("lightbrown");
  ball.display();
 // image(this.ball,130,630,10,70);
   
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  image(dustbin,550,570,200,180);

  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});		
	}
}



