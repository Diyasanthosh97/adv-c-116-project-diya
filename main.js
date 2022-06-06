noseX=0;
noseY=0;
function preload(){
nose=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
   
     
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function takepic(){
    save("clown nose_filter.jpg");
}
    function draw(){
        image(video,0,0,400,400);
        image(nose,noseX,noseY,40,30);
    }
    function modelLoaded(){
        console.log("Pose net is working");
    }
    function gotPoses(results){
    if(results.length>0){
    console.log(results);
 noseX= results[0].pose.nose.x-20;
 noseY=results[0].pose.nose.y+15;
    console.log("nosex="+noseX);
    console.log("nosey="+ noseY);
    }
    }




