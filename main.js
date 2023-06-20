cocossd="";
status="";

function preload(){
cocossd = loadImage('BAMBOO PLANT.jpg');
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded(){
console.log("Model Loaded!")
status = true;
objectDetector.detect(cocossd,gotResults);
}

function gotResults(error,results) {

}