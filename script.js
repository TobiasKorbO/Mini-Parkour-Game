let player; // 360 | 455
let jumpForce = 0;
let movement = 0;
let ground;
let platform;

function setup(){
    createCanvas(720, 480);
    player=createVector(width / 2, height - 25);
}

function draw(){
    background('DeepSkyBlue');
    rectMode(CENTER);
    fill('white')
    rect(player.x, player.y, 50, 50)
    fill('black')
    rect(platform.x, platform.y, 80, 20)

    player.y =+ jumpForce;

    player.x =+ movement;

    if(player.y >= ground) {jumpForce = 0;

    }
         else if (
            player.x + 25 >= platform.x -40 &&
            player.x -25 <= platform.x +40 &&
            player.y +25 >= platform.y -10 &&
            player.y -25 <= platform.y +10
        ){
        jumpForce = 0;
    } else {
        jumpForce += 0.5;
    }
    

    if(keyIsDown(32)&& (player.y >= ground || player.y == platform -35 )){
        jumpForce = - 12;
    }
    }

   
    if(keyIsDown(68)){
        movement = 5;
    }
    else if(keyIsDown(65)){
        jumpForce = -5;
    }
    else {
        movement=0
    }