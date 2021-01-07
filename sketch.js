// to create constant variables 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// create variables here 
var engine, world;
var polygonImage;
var ground1, ground2;
var invisibleGround;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32;
var ball1, ball2;
var stone;
var band;
var help;
var score = 0;

// load your images here 
function preLoad(){
    polygonImage = loadImage("polygon.png");
}

function setup(){

    // create canvas, engine and world 
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    // create new objects
    ground1 = new Ground(windowWidth/2-110, height/2+200, 390, 30);
    ground2 = new Ground(windowWidth/2+300, height/2+50, 200, 30);
    box1 = new Box(windowWidth/2 -250, height/2+170, 30, 50);
    box2 = new Box(windowWidth/2 -250 +box1.width/2, height/2+170, 30, 50);
    box3 = new Box(570, height/2+170, 30, 50);
    box4 = new Box(584 +box3.width/2, height/2+170, 30, 50);
    box5 = new Box(590 +box3.width/2 +box3.width/2, height/2+170, 30, 50);
    box6 = new Box(610 +box3.width +box3.width/2, height/2+170, 30, 50);
    box7 = new Box(620 +box3.width +box3.width, height/2+170, 30, 50);
    box8 = new Box(631 +2*(box3.width)+box3.width/2 , height/2+170, 30, 50);
    box9 = new Box(631 +3*(box3.width) , height/2+170, 30, 50);
    box10 = new Box(631 +3*(box3.width) +box3.width/2, height/2+170, 30, 50);
    box11 = new Box(631 +4*(box3.width), height/2+170, 30, 50);
    box12 = new Box(631 +4*(box3.width) + box3.width/2, height/2+170, 30, 50);
    box13 = new Box2(windowWidth/2 -220, height/2+80, 30, 50);
    box14 = new Box2(windowWidth/2 -220 +box3.width/2, height/2+80, 30, 50);
    box15 = new Box2(windowWidth/2 -230 +box3.width/2, height/2+26, 80, 30);
    box16 = new Box2(windowWidth/2 +20 +box3.width/2, height/2+80, 30, 50);
    box17 = new Box2(windowWidth/2 -50, height/2+80, 30, 50);
    box18 = new Box2(windowWidth/2 -10, height/2+30, 90, 30);
    box19 = new Box3(windowWidth/2-110, height/2 +30, 30, 190);
    box20 = new Box3(windowWidth/2-110, height/2 -box19.height/2, 190, 20);
    box21 = new Box4(windowWidth/2 -200, height/2+1, 30, 50);
    box22 = new Box4(windowWidth/2 -234, height/2+1, 30, 50);
    box23 = new Box4(windowWidth/2 , height/2+1, 30, 50);
    box24 = new Box4(windowWidth/2 -10, height/2+1, 30, 50);
    box25 = new Box(windowWidth/2+290,400,20,20);
    box26 = new Box(windowWidth/2+270,400,20,20);
    box27 = new Box(windowWidth/2+250,400,20,20);
    box28 = new Box(windowWidth/2+230,400,20,20);
    box29 = new Box(windowWidth/2+310,400,20,20);
    box30 = new Box(windowWidth/2+330,400,20,20);
    box31 = new Box(windowWidth/2+350,400,20,20);
    box32 = new Box(windowWidth/2+370,400,20,20);
    box33 = new Box(windowWidth/2+290,380,20,20);
    box34 = new Box(windowWidth/2+270,380,20,20);
    box35 = new Box(windowWidth/2+250,380,20,20);
    box36 = new Box(windowWidth/2+230,380,20,20);
    box37 = new Box(windowWidth/2+310,380,20,20);
    box38 = new Box(windowWidth/2+330,380,20,20);
    box39 = new Box(windowWidth/2+350,380,20,20);
    box40 = new Box(windowWidth/2+370,380,20,20);
    box41 = new Box(windowWidth/2+290,390,20,20);
    box42 = new Box(windowWidth/2+290,400,20,20);
    box43 = new Box(windowWidth/2+270,400,20,20);
    box44 = new Box(windowWidth/2+250,400,20,20);
    box45 = new Box(windowWidth/2+230,400,20,20);
    box46 = new Box(windowWidth/2+310,400,20,20);
    box47 = new Box(windowWidth/2+330,400,20,20);
    box48 = new Box(windowWidth/2+350,400,20,20);
    box49 = new Box(windowWidth/2+370,400,20,20);
    box50 = new Box(windowWidth/2+290,400,20,20);

    ball1 = new Ball(windowWidth/2 -210, height/2 +30, 10);
    ball2 = new Ball(windowWidth/2 -9, height/2 +30, 10);

    stone = new Stone(windowWidth/2-190,150,50,50);

    band = new Band(stone.body, {x:200, y: 200});
}

function draw(){
    background(0);
   // getBackground();
    textSize(30);
    text("score: "+score,600,150);

    // update engine to work 
    Engine.update(engine);

    // have a text
    textSize(20);
    text("drag the polygon to destroy blocks", windowWidth/2-250, windowHeight/2-300);
    text("press space bar to get second chance", (windowWidth/2-500)+250, windowHeight-30);
    text("when you have destroyed all the boxes press r to display all the box once again", windowWidth/2-450, height/2+319);
    text("press right arrow ", 1100,200);
    text("press left arrow ", 100, 600);
    text("press down arrow ", 1100,600);
    text("press up arrow", 150,200);

    // display all the things you have created 
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display(); 
    box4.display(); 
    box5.display();     
    box6.display(); 
    box7.display();     
    box8.display();      
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    ball1.display();
    ball2.display();
    stone.display();
    band.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box19.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
    box37.score();
    box38.score();
    box39.score();
    box40.score();
    box41.score();
    box42.score();
    box43.score();
    box44.score();
    box45.score();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    band.fly();
}

function keyPressed(){
    if(keyCode === 32){
        band.attach(stone.body);
	//	background(1,90,1);
    }
    else if(keyCode === 39){
        band.fly();
        band = new Band(stone.body, {x: 1200, y: 200});
        band.attach(stone.body);
    }
    else if(keyCode === 40){
        band.fly();
        band = new Band(stone.body, {x: 1200, y: 600});
        band.attach(stone.body);
    }
    else if(keyCode === 38){
        band.fly();
        band = new Band(stone.body, {x:200, y: 200});
        band.attach(stone.body);
    }
    else if(keyCode === 37){
        band.fly();
        band = new Band(stone.body, {x:200, y: 600});
        band.attach(stone.body);
    }
   else if(keyCode === 82){
       score = 0;
    band.attach(stone.body);
    // create new objects again
    ground1 = new Ground(windowWidth/2-110, height/2+200, 390, 30);
    ground2 = new Ground(windowWidth/2+300, height/2+50, 200, 30);
    box1 = new Box(windowWidth/2 -250, height/2+170, 30, 50);
    box2 = new Box(windowWidth/2 -250 +box1.width/2, height/2+170, 30, 50);
    box3 = new Box(570, height/2+170, 30, 50);
    box4 = new Box(584 +box3.width/2, height/2+170, 30, 50);
    box5 = new Box(590 +box3.width/2 +box3.width/2, height/2+170, 30, 50);
    box6 = new Box(610 +box3.width +box3.width/2, height/2+170, 30, 50);
    box7 = new Box(620 +box3.width +box3.width, height/2+170, 30, 50);
    box8 = new Box(631 +2*(box3.width)+box3.width/2 , height/2+170, 30, 50);
    box9 = new Box(631 +3*(box3.width) , height/2+170, 30, 50);
    box10 = new Box(631 +3*(box3.width) +box3.width/2, height/2+170, 30, 50);
    box11 = new Box(631 +4*(box3.width), height/2+170, 30, 50);
    box12 = new Box(631 +4*(box3.width) + box3.width/2, height/2+170, 30, 50);
    box13 = new Box2(windowWidth/2 -220, height/2+80, 30, 50);
    box14 = new Box2(windowWidth/2 -220 +box3.width/2, height/2+80, 30, 50);
    box15 = new Box2(windowWidth/2 -230 +box3.width/2, height/2+26, 80, 30);
    box16 = new Box2(windowWidth/2 +20 +box3.width/2, height/2+80, 30, 50);
    box17 = new Box2(windowWidth/2 -50, height/2+80, 30, 50);
    box18 = new Box2(windowWidth/2 -10, height/2+30, 90, 30);
    box19 = new Box3(windowWidth/2-110, height/2 +30, 30, 190);
    box20 = new Box3(windowWidth/2-110, height/2 -box19.height/2, 190, 20);
    box21 = new Box4(windowWidth/2 -200, height/2+1, 30, 50);
    box22 = new Box4(windowWidth/2 -234, height/2+1, 30, 50);
    box23 = new Box4(windowWidth/2 , height/2+1, 30, 50);
    box24 = new Box4(windowWidth/2 -10, height/2+1, 30, 50);
    box25 = new Box(windowWidth/2+290,400,20,20);
    box26 = new Box(windowWidth/2+270,400,20,20);
    box27 = new Box(windowWidth/2+250,400,20,20);
    box28 = new Box(windowWidth/2+230,400,20,20);
    box29 = new Box(windowWidth/2+310,400,20,20);
    box30 = new Box(windowWidth/2+330,400,20,20);
    box31 = new Box(windowWidth/2+350,400,20,20);
    box32 = new Box(windowWidth/2+370,400,20,20);
    box33 = new Box(windowWidth/2+290,380,20,20);
    box34 = new Box(windowWidth/2+270,380,20,20);
    box35 = new Box(windowWidth/2+250,380,20,20);
    box36 = new Box(windowWidth/2+230,380,20,20);
    box37 = new Box(windowWidth/2+310,380,20,20);
    box38 = new Box(windowWidth/2+330,380,20,20);
    box39 = new Box(windowWidth/2+350,380,20,20);
    box40 = new Box(windowWidth/2+370,380,20,20);
    box41 = new Box(windowWidth/2+290,390,20,20);
    box42 = new Box(windowWidth/2+290,400,20,20);
    box43 = new Box(windowWidth/2+270,400,20,20);
    box44 = new Box(windowWidth/2+250,400,20,20);
    box45 = new Box(windowWidth/2+230,400,20,20);
    box46 = new Box(windowWidth/2+310,400,20,20);
    box47 = new Box(windowWidth/2+330,400,20,20);
    box48 = new Box(windowWidth/2+350,400,20,20);
    box49 = new Box(windowWidth/2+370,400,20,20);
    box50 = new Box(windowWidth/2+290,400,20,20);
    box51 = new Box(windowWidth/2+270,400,20,20);
    box52 = new Box(windowWidth/2+250,400,20,20);
    box53 = new Box(windowWidth/2+230,400,20,20);
    box54 = new Box(windowWidth/2+310,400,20,20);
    box55 = new Box(windowWidth/2+330,400,20,20);
    box56 = new Box(windowWidth/2+350,400,20,20);
    box57 = new Box(windowWidth/2+370,400,20,20);
    box58 = new Box(windowWidth/2+290,400,20,20);
    }
}

async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(response);
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour> 06 && hour< 19){
        background("green");
    }
    else{
        background(0);
    }
}