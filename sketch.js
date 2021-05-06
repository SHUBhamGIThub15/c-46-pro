var bg,bgImg
var ground,groundImg
var spider,spiderImg
var Obstacles,obstaclesImg
var score
function preload(){
  bgImg = loadImage("BackGround.jpg")
  groundImg=loadImage("Ground 1.jpg")
  bg2=loadImage("img.jpeg")
  spiderImg=loadAnimation("SpiderMan Running2.png","SpiderMan Running3.png","SpiderMan Running4.png")
  obstaclesImg =loadImage("enimer.png")
}

function setup() {
 createCanvas(1600,800)
 bg= createSprite(800,0,1600,800)
 bg.addImage(bgImg)
 bg.velocityX=-4
 bg.x=bg.width/2
 bg.scale=2

 spider=createSprite(100,500,100,100)
 spider.addAnimation("spider",spiderImg)
 spider.scale=0.5
 spider.velocityX=2
//bg.addImage(bg2)

}

function draw() {
    background("black")

    if(bg.x <20){
        bg.x=bg.width/2
    }
if (keyDown("space")){
    spider.velocityY = -8
}
spider.velocityY=spider.velocityY+0.8
spawnObstacles()
    spawnGround1()
    spawnGround2()
    drawSprites()
}
function spawnGround1(){
    if(frameCount%60===0){

        ground =createSprite(100,780,200,80)
        ground.addImage(groundImg)
        ground.scale=1
        ground.velocityX=-4
  spider.collide(ground)
        ground.lifetime=150

    }
}

function spawnGround2(){
    if(frameCount%60===0){

        ground2 =createSprite(1600,750,200,80)
        ground2.addImage(groundImg)
        ground2.scale=1
        ground2.velocityX=-4

        ground2.lifetime=80
    }
}


function spawnObstacles(){
    if(frameCount%90===0){
var rand =Math.round(random(500,1000))

     Obstacles =createSprite(1800,520,200,80)
     Obstacles.addImage(obstaclesImg)
    Obstacles.scale=0.4
    Obstacles.velocityX=-8
    Obstacles.lifetime=100
    }
}