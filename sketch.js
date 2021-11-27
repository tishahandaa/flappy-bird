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
birds = loadImage("bird.png")
restart = loadImage("restart.png")
coin = loadImage("coin.png")
}




function setup() {
createCanvas(400,400)




//scene
scenery = createSprite(225,200)
scenery.addImage(scene)
scenery.scale = 2.4
scenery.velocityX = -0.7

//bird
bird = createSprite(50,200,50,200)
bird.addImage(birds)
bird.scale = 0.17

score = 0
}

function draw() {

    if (gameState === PLAY){
        scenery.velocityX = -(4 + 3 * score/100)
        score = score = Math.round(getFrameRate()/60)

        if (scenery.x < 0){
            scenery.x = scenery.width/2
        }

        if (keyDown("space")&& bird.y >=100){
            bird.velocityY = -12
        }

        bird.velocityY = bird.velocityY +0.8

    }



//scene
if (scenery.x<0){
    scenery.x = scenery.width/2
}

//bird

 drawSprites()
}

