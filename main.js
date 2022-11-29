noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/Bbpp5ZPb/clown-nose.png')
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=creatCapture(VIDEO);
    video.size(300,300);
    video.hide();
    postNet=ml5.postNet(video,modelLoaded);
    postNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('postNet is Initialized');
}

function gotPoses(results)
{
    if ( results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('nose x ='+results[0].pose.nose.x);
        console.log('nose y ='+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose ,noseX,noseY,30,30);
    }
    
    function take_snapshot(){
        save (' myFilterImage.png');
    }
