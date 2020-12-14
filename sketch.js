var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 strok_1 = Bodies.rectangle(width/2, 680, 200, 20 , {isStatic:true} );
 	World.add(world, strok_1);

	 strok_2 = Bodies.rectangle(width/2-100, 630, 20, 100 , {isStatic:true} );
	 World.add(world, strok_2);
	 
	 strok_3 = Bodies.rectangle(width/2+100, 630, 20, 100 , {isStatic:true} );
	 World.add(world, strok_3);
	 
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  fill  ("red");

  rect (strok_1.position.x,strok_1.position.y,200,20)

  rect (strok_2.position.x,strok_2.position.y,20,100)

  rect (strok_3.position.x,strok_3.position.y,20,100)

  fill ("brown")

  rect (ground.position.x,ground.position.y,width,10)

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Matter.Body.setStatic( packageBody, false);	
  }
}



