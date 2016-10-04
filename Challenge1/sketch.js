var foo = [40,30,20,10];
var num = [50, 60, 70];

function setup() {
  createCanvas(400,300);
}

function draw() {
  var n, i;
  //translate(-20, -50);
  rotate(mouseX/10.0);
  for(n=0; n<num.length; n++) {
    for(i=0; i< foo.length; i++) {
    ellipse(width/2 + num[n],height/2 + num[n],foo[i],foo[i]);
    }
    
  // we want make a spinning effet with rotate  
 }  
}