/*
1. 마우스
  -마우스버튼을 누른상태로 커서를 움직이면 눈동자가 커서를 따라 움직임
2.키보드
  -키보드b키를누르면 옷색상이 랜덤으로 바뀐다.
  -키보드w,a,s,d키를 누르면 캐릭터가 움직인다.
*/
let x = 0;
let y = 0;
let speed = 5;

let showRect = false;

let pupil1X = 155;
let pupil1Y = 200;
let pupil2X = 245;
let pupil2Y = 200;

let r;
let g;
let b;

function setup() {
  createCanvas(400, 600);
}

function draw() {
push();
translate(x, y);
let target1X = constrain(mouseX, 145, 165);
let target1Y = constrain(mouseY, 190, 210);

let target2X = constrain(mouseX, 235, 255);
let target2Y = constrain(mouseY, 190, 210);

if (mouseIsPressed) {
  pupil1X = lerp(pupil1X, target1X, 0.1);
  pupil1Y = lerp(pupil1Y, target1Y, 0.1);

  pupil2X = lerp(pupil2X, target2X, 0.1);
  pupil2Y = lerp(pupil2Y, target2Y, 0.1);
}
background('#C0FFFF');
strokeWeight(1);
noStroke();
fill('#FFE0C0');
circle(200,200,200);
fill(0);
arc(200, 170, 220, 240, PI, TWO_PI);
fill('#FFE0C0');
triangle(200, 100, 175, 245, 225, 240);
rect(184,292,39,39);
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
fill('#FFE0C0');
noStroke();
rect(184,292,39,39);
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
noStroke();
fill('#FFCC99');
ellipse(102,199,13,36);
ellipse(298,199,13,36);
fill('#FFE0C0');
rect(102,181,13,36);
rect(285,182,13,36);

if (keyIsPressed) {
  if (keyCode === ENTER) {
    fill('#FFE0C0');
    arc(200, 255, 50, 30, 0, PI);
    stroke('#FF9999');
    line(175,255,225,255);
    noStroke();
    fill('#FFE0C0');
    triangle(188, 170, 211, 170, 199, 101);
      }  
  }

if(showRect) {
  fill(r, g, b);
  rect(73,334,256,250,25);            
  push();
  translate(203, 335);    
  rotate(-0.436);      
  noStroke();
  arc(0, 0, 230, 200, 0, 4.014);                    
  fill(r, g, b);
  pop();
  triangle(107,291,187,300,186,324);
  triangle(217,300,305,287,218,327);
  noStroke();
  stroke(220);
  strokeWeight(4);
  line(173,375,173,421);
  line(226,375,226,439);
  fill(220);
  circle(173,421,5);
  circle(226,439,5);
  noStroke();
  line(110,369,110,545);
  line(290,369,290,545);
  fill(220);
  stroke(0);
  circle(309,557,50);
  circle(93,557,50);
  stroke('#000080');
  line(110,369,110,540);
  line(290,369,290,540);
  }
}
 function keyPressed() {
  if(key === 'b' || key === 'B') {
    showRect = true;
    r = random(255);
    g = random(255);
    b = random(255);
  }
  if(key === 'w' || key === 'W') {
    y -= speed;
  }
  if(key === 's' || key === 'S') {
      y += speed;
    }
  if(key === 'd' || key === 'D') {
      x += speed;
    }
  if(key === 'a' || key === 'A') {
      x -= speed;
  }
  if(key === 'g' || key === 'G'){
    saveGif("character",12);
  }
  pop();
}   