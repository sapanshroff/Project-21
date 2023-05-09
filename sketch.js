
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	//Create the Bodies Here.
	ball = Bodies.circle(200, 200, 30, ball_options)  
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20)
	leftObj = new Ground(1100,600,20,120) 
	rightObj= new Ground(1350,600,20,120)
	Engine.run(engine);
}

function draw() {
  background(0);
 ellipse(ball.position.x,ball.position.y,30,30)
 groundObj.display()
 leftObj.display()
 rightObj.display()

}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}
