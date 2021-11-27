var PLAY = 1
var END = 0
var gameState = PLAY
var bird
var obstacle
var scene
var score
var obstacles
var coins




function preload(){
scene = loadImage("scene.png")
flyingbird = loadAnimation("bird.png")
restart = loadImage("restart.png")
coin = loadImage("coin.png")
}




function setup() {
createCanvas(400,400)
score = 0
coinsGroup = new Group()



//scene
scenery = createSprite(225,200)
scenery.addImage(scene)
scenery.scale = 2.4
scenery.velocityX = -0.7

//bird
bird = createSprite(50,190,50,200)
bird.addAnimation("bird",flyingbird)
bird.scale = 0.17
bird.debug = true
bird.setCollider("circle",0,0,5)
wall = createSprite(50,200,40,20)

}

function draw() {
drawSprites()
fill("black")
textSize(20)
text("score: "+score,200,50)


if (scenery.x < 0){
     scenery.x = scenery.width/2
}

if (keyDown("space")&& bird.y >=100){
     bird.velocityY = -12
        }

        bird.velocityY = bird.velocityY +0.8


if(coinsGroup.isTouching(bird)){
    coinsGroup.destroyEach()
    score = score+1
}

spawncoins()
}


function spawncoins(){
    if(frameCount%80 == 0){
        coins =  createSprite(450,200,30,10)
        coins.debug = true
        coins.addImage(coin)
        coins.y = random(50,350)
        coins.scale = 0.1
        coins.velocityX = -4
        coins.lifetime = (450/4)
        coins.depth = bird.depth
        coinsGroup.add(coins)
    
    }


}


