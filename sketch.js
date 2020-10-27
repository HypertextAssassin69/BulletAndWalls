var bullet,wall,bgImage,bg;
var speed , weight,thickness,damage;
var gameState = "start";
function preload(){
bgImage = loadImage("bg.jpg")
}
function setup() {
  createCanvas(800,400);
 bg = createSprite(400,200);
 bg.addImage(bgImage);
 bg.scale = 2.7;

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "purple";
  bullet.debug = true;
  
  thickness = Math.round(random(22,83));
    wall = createSprite(700,200,50,350);
    wall.shapeColor = "lightblue";
    wall.debug = true;

  
}

function draw() {
  background("Orange");
  
  drawSprites();
 
   console.log(wall.width)
   if(gameState === "start"){
    textSize(30);
  fill("yellow"); 
    text("Press Space To Start The TEST.",200,200);
    bullet.velocityX = 0
    bullet.shapeColor = "purple";
    wall.shapeColor = "lightblue";
   }
 
  if (gameState === "start"&&keyDown("space")){
   gameState = "play";
   speed = Math.round(random(100,140));
  weight = Math.round(random(80,140));
  thickness = Math.round(random(30,70));
  damage = (0.5 * speed * speed * weight/(thickness*thickness*thickness));
  }
 
  if (gameState === "play"){
    wall.width = thickness;
    bullet.velocityX = speed;
  bullet.depth = 5;
  textSize(20);
  fill("yellow");
  text("Speed Of Bullet : "+speed,50,20);
  text("Weight Of Bullet: "+ weight,600,20);
  text("Thickness Of The Wall: "+ thickness,300,20);
  
  
isTouching(bullet,wall);

if(bullet.x> 800){
   
  text("This wall Doesn't Stand A chance Against this Bullet",120,250);
  textSize(50);
  fill("yellow");
  text("Press R to Restart.",175,300);
  if (keyWentDown("r")){
    gameState = "start";
    bullet.x = 0;
    
    wall.width = thickness;
    speed = Math.round(random(100,140));
   weight = Math.round(random(80,140));
   thickness = Math.round(random(30,70));
   damage= (0.5 * speed * speed * weight/(thickness*thickness*thickness));
   
  }
}

}
}
function isTouching(object1,object2){
  if (object1.x - object2.x< object2.width/2 + object1.width/2&&
    object2.x - object1.x< object2.width/2 + object1.width/2&&
    object1.y - object2.y< object2.height/2 + object1.height/2&&
    object2.y - object1.y< object2.height/2 + object1.height/2) {
     
   //return true;
  
   if (keyWentDown("r")){
    gameState = "start";
    bullet.x = 50;
    
    wall.width = thickness;
    speed = Math.round(random(100,140));
   weight = Math.round(random(80,140));
   thickness = Math.round(random(30,70));
   damage = (0.5 * speed * speed * weight/(thickness*thickness*thickness));
   
  }
  bullet.velocityX = 0;
  textSize(20);
    fill("yellow");
  text("Damage = ",195,105);
  text("0.5 * speed * speed * weight",295,100);
  text("_________________________",295,100);
  text("thickness*thickness*thickness",295,120);
  textSize(50);
  text ("Damage: "+ Math.round(damage),200,200);
  
  text("Press R to Restart.",175,300)
  if(damage>10){
    wall.shapeColor = "red";
    textSize(20);
    fill("yellow");
    text("This wall Is Not Effective Against this Bullet",145,250);
  }
  
  if(damage<10){
    wall.shapeColor = "lightgreen";
    textSize(20);
    fill("yellow");
    text("This wall Is Effective Against this Bullet",150,250)
  
   }
 }
}

