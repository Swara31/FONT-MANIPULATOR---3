leftwrist_X=0;
rightwrist_X=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

}

function modelLoaded()
{
    console.log("PoseNet is initilized");

}

function gotposes(results)
{
    if(results.lenght > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWristx;
        rightWristX = results[0].pose.rightWristx;
        difference = floor(leftWristX - rightWristX);
    }
  
}


function draw()
{
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Peter',50,400);
}