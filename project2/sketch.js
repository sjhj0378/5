let showLine = false;

let pupil1X = 155;
let pupil1Y = 200;
let pupil2X = 245;
let pupil2Y = 200;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  strokeWeight(1);
  background(220);
  noStroke();
  fill('#FFE0C0');
  circle(200,200,200);
  fill(0);
  arc(200, 170, 220, 240, PI, TWO_PI);
  fill('#FFE0C0');
  triangle(200, 100, 175, 245, 225, 240);
  rect(188,294,40,40);
  fill(255,255,255);
  stroke(0);
  ellipse(155,200,35,30);
  ellipse(245,200,35,30);
  fill(0);
  circle(pupil1X, pupil1Y, 15);
  circle(pupil2X, pupil2Y, 15);
  noFill();
  stroke('#FFCC99');
  strokeWeight(3);
  arc(200, 220, 20, 20, 0, PI);
  noStroke();
  fill('#FF9999');
  arc(200, 255, 50, 30, 0, PI); 
   fill(0);
  fill('#6666B2');
  rect(73,334,256,250,25);
  push();                 
  translate(203, 335);    
  rotate(-0.436);         
  fill('#6666B2');
  noStroke();
  arc(0, 0, 230, 200, 0, 4.014); 
  pop();                   
  noStroke();
  fill('#CCE5FF');
  triangle(107,291,187,300,186,324);
  triangle(217,300,305,287,218,327);
  stroke(220);
  strokeWeight(4);
  line(173,375,173,421);
  line(226,375,226,439);
  fill(220);
  circle(173,421,5);
  circle(226,439,5);
  noStroke();
  fill('#FFE0C0');
  ellipse(106,200,36,46);
  ellipse(294,200,36,46);
  strokeWeight(2);
  stroke('#000080');
  line(110,369,110,545);
  line(290,369,290,545);
  fill(220);
  stroke(0);
  circle(309,557,50);
  circle(93,557,50);

  fill(0);
  textSize(16);
  text("x: " + mouseX + ", y: " + mouseY, 10, 20);
  
  
  noStroke();
  fill('#FFCC99');
  ellipse(102,199,13,36);
  ellipse(298,199,13,36);
  fill('#FFE0C0');
  rect(102,181,13,36);
  rect(285,182,13,36);
  

    
}