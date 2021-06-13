x_value = 0;
y_value = 0;

function preload(){
   clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(525,200);
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet (video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Hey")
}

function gotPoses(results){
    
    if(results.length > 0){
       // console.log(results)
        console.log("nose x = "+ results[0].pose.nose.x)
        console.log("nose y = "+ results[0].pose.nose.y)
        x_value = results[0].pose.nose.x + 35;
        y_value = results[0].pose.nose.y + 55;
    }
}


function draw(){
   image(video,0,0,400,400)
    image(clown_nose, x_value, y_value,40,40)
   //fill(250,0,0)
   //stroke(250,0,0)
   //circle(x_value,y_value,20)
}

function snap(){
    save('clown_photo.png');
}