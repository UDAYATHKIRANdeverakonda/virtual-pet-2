
var Dog,happyDog,Database,foodS,foodStock

function preload()
{
  Dog=loadImage("images/dogimg.png");
  happyDog=loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500,500);
  Dog1=createSprite(250,250,10,10)
  Dog1.addImage(Dog)
  Dog1.scale=0.7
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  

 background(46,139,87)
 
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    Dog1.addImage(happyDog);
  }
  drawSprites();
  text("Press up arrow to feed drago his milk",50 ,50);
  textSize(30);
}


function readStock(data)
{
  foodS=data.val();
}



function writeStock (x)
{
   if(x<=0)
{
  x=0
}else{
  x=x-1
}
  database.ref('/').update({
    food:x
   })
 }




















