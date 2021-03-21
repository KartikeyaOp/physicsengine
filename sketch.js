const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myworld,myengine;
var ground,ball;



function setup(){
    var canvas = createCanvas(400,400);
  
    myengine = Engine.create();
    myworld = myengine.world;

   var groundoption = {
       isStatic : true
   }

    ground = Bodies.rectangle(200,390,400,20,groundoption);
    World.add(myworld,ground);

    // console.log(box);
    var balloption={
        restitution:1
    }
ball=Bodies.circle(200,200,20,balloption);
World.add(myworld,ball);
}

function draw(){
    background(0);
    Engine.update(myengine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}
