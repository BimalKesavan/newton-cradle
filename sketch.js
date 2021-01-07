const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roofobject;
var bobobject1;
var bobobject2;
var bobobject3;
var bobobject4;
var bobobject5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofobject=new roof(width/2,height/4,width/2,20); 
	bobDiameter=40;
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500; 
	bobobject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobobject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bobobject3=new bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobobject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobobject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	rope1=new chain(bobobject1.body,roofobject.body,-bobDiameter*2, 0) 
	rope2=new chain(bobobject2.body,roofobject.body,-bobDiameter*1, 0) 
	rope3=new chain(bobobject3.body,roofobject.body,0, 0) 
	rope4=new chain(bobobject4.body,roofobject.body,bobDiameter*1, 0) 
	rope5=new chain(bobobject5.body,roofobject.body,bobDiameter*2, 0)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  roofobject.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(bobobject1.body, {x: mouseX , y: mouseY});
	
}



