const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundColor = 0;
var score = 0;

var engine, world;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 400, 1200, 5);   
    polygon = new Polygon(200, 200, 50, 50);
    slingshot = new Slingshot(polygon.body, {x: 200, y:200});

    box1 = new Box(830, 385, 30, 40);
    box2 = new Box(860, 385, 30, 40);
    box3 = new Box(890, 385, 30, 40);
    box4 = new Box(920, 385, 30, 40);
    box5 = new Box(950, 385, 30, 40);
    box6 = new Box(860, 335, 30, 40);
    box7 = new Box(890, 335, 30, 40);
    box8 = new Box(920, 335, 30, 40);
    box9 = new Box(890, 295, 30, 40);
}

function draw(){
    getBackground();
    background(backgroundColor);
    Engine.update(engine);
    strokeWeight(1);
    text(score, 1000, 50);
    ground.display();
    slingshot.display();    
    polygon.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();

}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})

}

function mouseReleased(){

    slingshot.fly();

}

function keyPressed(){

    if(keyCode === 32){
        slingshot.attach(polygon.body);

    }

}

async function getBackground(){
    var api = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var timeJson = await api.json();

    var time = timeJson.datetime;

    var hour = time.slice(11, 13);

    if(hour >= 8 && hour <= 20){

      backgroundColor = 255;

    } else {

        backgroundColor = 0;
    }
}