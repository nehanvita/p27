
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var rope1,bob1,roof

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Roof(450,100,650,20)
  bob1 = new Bob(200,150,40)
  bob2 = new Bob(200,150,40)
  bob3 = new Bob(200,150,40)
  bob4 = new Bob(200,150,40)
  bob5 = new Bob(200,150,40)
    rope1 = new Rope(roof.body,bob1.body)
    rope2 = new Rope(roof.body,bob2.body)
    rope3 = new Rope(roof.body,bob3.body)
    rope4 = new Rope(roof.body,bob4.body)
    rope5 = new Rope(roof.body,bob5.body)

	
  
}


function draw() {
  
  background("white")
  Engine.update(engine);
  
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}

function keyPressed(){
      if(keyCode === UP_ARROW){
     matter.body.applyForce(bob1.body,bobpos,{x :-50,y :-45})
}
}

function drawLine(Constraint){

  bobBodyPosition = Constraint.bodyA.position
  roofBodyPosition = Constraint.bodyB.position

  roofBodyOffset=Constraint.pointB

  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(bobBodyPosition.x,bobBodyPosition.y,roofBody.x,roofBody.y);  
}
