var r1, r2, r3, r4, r5, r6, r7;
var hueVal;
var bars;
 
function setup() {
  createCanvas(windowWidth, windowHeight);




  colorMode(HSB, 360, 100, 100);
hueVal = random(50);
  noStroke();
  r1 = new MRect(1, 134.0, 0.532, 0.1*height, 10.0, 80.0);
  r2 = new MRect(30, 44.0, 0.166, 0.3*height, 20.0, 6.0);
  r3 = new MRect(2, 58.0, 0.332, 0.4*height, 10.0, 35.0);
  r4 = new MRect(1, 120.0, 0.0498, 0.9*height, 20.0, 100.0);
  r5 = new MRect(10, 8.0, 0.7, 0.7*height, 20.0, 20.0);
  r6 = new MRect(40, 8.0, 0.02, 0.5*height, 30.0, 50.0);
  r7 = new MRect(15, 8.0, 0.02, 0.5*height, 40.0, 70.0);

}
 
function mousePressed() {
hueVal = random(360);
} 
 
function draw() {
background(hueVal, 70, 70);

  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  r6.display();
  r7.display();
 
  r1.move(mouseX-(width/2), mouseY+(height*0.1), 30);
  r2.move((mouseX+(width*0.05))%width, mouseY+(height*0.025), 20);
  r3.move(mouseX/4, mouseY-(height*0.025), 40);
  r4.move(mouseX-(width/2), (height-mouseY), 70);
  r5.move(mouseX/2, mouseY+(height*0.2), 10);
  r6.move(mouseX+(width/4), (height-mouseY), 20);
  r7.move(mouseX-(width*0.8), mouseY-(height*0.025), 50);
}
 
function MRect(iw, ixp, ih, iyp, id, it) {
  this.w = iw; // single bar width
  this.xpos = ixp; // rect xposition
  this.h = ih; // rect height
  this.ypos = iyp; // rect yposition
  this.d = id; // single bar distance
  this.t = it; // number of bars

  this.move = function(posX, posY, damping) {
  var dif = this.ypos - posY;
   if (abs(dif) > 1) {
 this.ypos -= dif/damping;
}
 dif = this.xpos - posX;
  if (abs(dif) > 1) {
 this.xpos -= dif/damping;
}
  }

  this.display = function() {
  for (var i=0; i<this.t; i++) {
  rect(this.xpos+(i*(this.d+this.w)), 
  this.ypos, this.w, height*this.h);
 }
  }
}