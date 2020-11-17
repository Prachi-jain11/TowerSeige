const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, slingshot, ball;
var stand1, stand2;
var score = 0;
var bg = "";

function preload(){
  dateTime();
 }

function setup() {
  createCanvas(900,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ball = new Ball(100,140,30)
  ground = new Ground();
  
  ground_low = new Ground();
  //STAND 1
  //level one
  block1 = new Block(315, 290, 30, 40);
  block2 = new Block(340, 290, 30, 40);
  block3 = new Block(370, 290, 30, 40);//10
  block4 = new Block(400, 290, 30, 40);
  block5 = new Block(430, 290, 30, 40);
  block6 = new Block(460, 290, 30, 40);
  block7 = new Block(490, 290, 30, 40);
  
  //level two
  block8 = new Block(340, 248, 30, 40);
  block9 = new Block(370, 248, 30, 40);
  block10 = new Block(400, 248, 30, 40);//52
  block11 = new Block(430, 248, 30, 40);
  block12 = new Block(460, 248, 30, 40);
  
  //level three
  block13 = new Block(370, 208, 30, 40);//370-278
  block14 = new Block(400, 208, 30, 40);
  block15 = new Block(430, 208, 30, 40);
  
  //top
  block16 = new Block(400, 168, 30, 40);//370-238

  //STAND 2
  //level one
  block_1 = new Block(620, 260, 30, 40);
  block_2 = new Block(640, 260, 30, 40);
  block_3 = new Block(670, 260, 30, 40);
  block_4 = new Block(700, 260, 30, 40);
  block_5 = new Block(730, 260, 30, 40);
  block_6 = new Block(760, 260, 30, 40);
  block_7 = new Block(790, 260, 30, 40);
  
  //level two
  block_8 = new Block(640, 218, 30, 40);
  block_9 = new Block(670, 218, 30, 40);
  block_10 = new Block(700, 218, 30, 40);
  block_11 = new Block(730, 218, 30, 40);
  block_12 = new Block(760, 218, 30, 40);
  
  //level three
  block_13 = new Block(670, 178, 30, 40);
  block_14 = new Block(700, 178, 30, 40);
  block_15 = new Block(730, 178, 30, 40);
  
  //top
  block_16 = new Block(700, 138, 30, 40);

  ball = new Ball(50,170);
  slingshot = new Slingshot(ball.body, {x:50,y:150});
  stand1 = new Stand(400, 300, 230, 10);
  stand2 = new Stand(700, 270, 240, 10);
}

function draw() {
  if(bg)
    background(bg);
  text(mouseX+","+mouseY,mouseX,mouseY);
  fill ("black");
  textSize (20);
  text("Score: "+score, 750, 40);
  ground.display();
  slingshot.display();
  ball.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();
  block_6.display();
  block_7.display();
  block_8.display();
  block_9.display();
  block_10.display();
  block_11.display();
  block_12.display();
  block_13.display();
  block_14.display();
  block_15.display();
  block_16.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block_1.score();
  block_2.score();
  block_3.score();
  block_4.score();
  block_5.score();
  block_6.score();
  block_7.score();
  block_8.score();
  block_9.score();
  block_10.score();
  block_11.score();
  block_12.score();
  block_13.score();
  block_14.score();
  block_15.score();
  block_16.score();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }
}

async function dateTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseType = await response.json();
  console.log(responseType);
  var dt = responseType.datetime;
  console.log(dt);
  var hr = dt.slice(11,13);
  console.log(hr);

  if(hr>=06 && hr<=19){
      bg = "lightblue";
  }
  else{
      bg = "brown";
  }
  background(bg);
  console.log(bg);
}