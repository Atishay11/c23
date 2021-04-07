const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground
function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;
    

    

     box1 = new Box(200,150,50,50);
    box2 = new Box(210,100,50,100);
    ground=new Ground(200,900,1000,20);
}

function draw(){
    background(0);
    Engine.update(engine);
        
        box2.display();
    box1.display();
    ground.display();
}
