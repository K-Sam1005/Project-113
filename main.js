function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(350,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,20,20,590,430);
    
    fill(255,0,0);
    rect(20,20,10,430);
    rect(20,20,590,10);
    rect(600,20,10,430);
    rect(20,440,590,10);


    fill(252, 186, 3);
    stroke(255,0,0);
    circle(30,30,50);
    circle(610,30,50)
    circle(30,450,50);
    circle(610,450,50);

}