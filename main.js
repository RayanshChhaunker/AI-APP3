xposi=0;
yposi=0;
function imagesave() {
    save('clown_nose_youlookclownish.png');
}
function preload() {
    nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    //video.hide();
    posenet = ml5.poseNet(video, consolelog);
    posenet.on('pose', finalresult);
}
function draw() {
    image(video, 0, 0, 300, 300);
    //stroke("red");
    //circle(xposi, yposi, 10);
    image(nose, xposi-15, yposi-15, 25, 25);
}
function consolelog() {
    console.log("model loaded");
}

function finalresult(results) {
    if (results.length > 0) {
        //console.log(results);
        xposi = results[0].pose.nose.x;
        yposi = results[0].pose.nose.y;
        
    }
}