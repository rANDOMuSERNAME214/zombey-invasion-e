
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bols=0
var balls=[]
var zombey
var num


function setup() {
  createCanvas(windowWidth-1,windowHeight-5);

  engine = Engine.create();
  world = engine.world;

  button=createButton("Button")
  button.position(windowWidth/2,50)
  button.size(60,50)
  button.mouseClicked(drop)

   button2=createButton("Button")
  button2.position(100,50)
  button2.size(60,50)
  button2.mouseClicked(drop2)

   button3=createButton("Button")
  button3.position(windowWidth-140,50)
  button3.size(60,50)
  button3.mouseClicked(drop3)

  num=random(1,10)

}


function draw() 
{
  background(51);
  Engine.update(engine);
    
  if(num=1){
    zombey=createSprite(-10,windowHeight-30,50,50)
  }
drawSprites()

  for(var ball of balls){
    ball.display()
  }
  
}


  
  
  
function drop(){
for(var i=0;i<=0;i++){
var ball=new CannonBall(windowWidth/2+30,100,50,50)
balls.push(ball)
}
bols=bols+1
}

function drop2(){
  for(var i=0;i<=0;i++){
  var ball=new CannonBall(130,100,50,50)
  balls.push(ball)
  }
  bols=bols+1
  }
  
function drop3(){
    for(var i=0;i<=0;i++){
    var ball=new CannonBall(windowWidth-110,100,50,50)
    balls.push(ball)
    }
    bols=bols+1
    }
    