var cat, cat1Img, cat2Img, cat3Img;
var mouse, mouse1Img, mouse2Img, mouse3Img;
var bg, bgImg;
function preload() {
    //load the images here
    bgImg=loadImage('garden.png');
    cat1Img=loadImage('cat1.png');
    cat2Img=loadAnimation(idk, 'cat2.png', 'cat3.png');
    cat3Img=loadImage('cat4.png');
    mouse1Img=loadImage('mouse1.png');
    mouse2Img=loadAnimation(boi, 'mouse2.png', 'mouse3.png');
    mouse3Img=loadImage('mouse4.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(400, 300);
    bg.addImage(bgImg);
    
    cat=createSprite(800, 600);
    cat.addImage(cat1);
    
    mouse=createSprite(200, 600);
    mouse.addImage(mouse1);
}

function draw() {

    background(255);
    bg.display();
    cat.display();
    mouse.display();
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.addImage(cat3);
        mouse.addImage(mouse3);
    }
    

}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyPressed(LEFT)){
        cat.x=cat.x-5;
        cat.addAnimation(idk, cat2);
        mouse.addAnimation(boi, mouse2);
    }

}
