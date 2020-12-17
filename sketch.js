const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backimg, santa, santaBody;
var engine, world;
var snow = [];
var maxSnowFlakes = 100; 
var ground; 
var santaImg;

function preload(){
backimg = loadImage("background.jpg");
santaImg = loadImage("santa.jpg")
}

function setup() {
 engine = Engine.create();
 world = engine.world;
 createCanvas(900, 600);
 
  back1=createSprite(450,300,900,600);
  back1.addImage(backimg);
  back1.x=back1.width/2;
  back1.velocityX=-4;
  

 santa = createSprite(200, 300, 90, 70);
 santa.addImage(santaImg);
 santa.scale = .4;

 ground = createSprite(450, 300, 1800, 20);
 ground.x = ground.width /2;

 


    for (var j = 0; j < maxSnowFlakes; j++) 
    {
     snow.push(new Snow(random(0,900), random(0,900)));
    }
    
    if(keyDown("space")){
      santa.velocityY = -10;
    }
    //santa.velocityY = santa.velocityY + 0.8;

}

  
function draw() {
  Engine.update(engine);
  background(255);
  text(mouseX+","+mouseY,mouseX,mouseY);

  ground.velocityX = -2
  if (ground.x < 0){
    ground.x = ground.width/2;
  }


  if(back1.x<100){
    back1.x=back1.width/2;
  }
  santa.display();
  santa.collide(ground);
  drawSprites();
  for (var i = 0; i < maxSnowFlakes; i++){
    
    snow[i].display();
    snow[i].updateY();
  }
  
  


  
}

