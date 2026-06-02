let arcColors = [];

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);

  for (let i = 0; i < 18; i++) {
    arcColors[i] = color(
      random(360),
      random(50, 100),
      random(70, 100),
      80
    );
  }

  noLoop();
}

function draw() {
  background(0, 0, 100, 100);

  let lx0 = 30;
  let lx1 = 50;
  let lx2 = 70;
  let lx3 = 90;

  let rx0 = 570;
  let rx1 = 550;
  let rx2 = 530;
  let rx3 = 510;

  stroke(50, 100, 100, 60);
  strokeWeight(10);
  line(100, 0, 0, 100);
  line(500, 0, 600, 100);
  line(0, 300, 100, 400);
  line(500, 400, 600, 300);

  strokeWeight(5);
  stroke(180, 100, 100);
  fill(300, 100, 50);
  triangle(0, 0, 93, 0, 0, 93);
  triangle(0, 307, 0, 400, 93, 400);
  triangle(507, 0, 600, 0, 600, 93);
  triangle(507, 400, 600, 400, 600, 307);

  noStroke();
  fill(0, 0, 0);
  circle(150, 300, 10);
  circle(450, 300, 10);

  stroke(0, 0, 0);
  line(150, 300, 450, 300);
  triangle(240, 295, 240, 305, 250, 300);

  noFill();
  stroke(120, 100, 100);
  rect(150, 120, 300, 130);

  noStroke();
  let xPositions = [180, 210, 240, 270, 300, 330, 360, 390, 420];

  for (let i = 0; i < 9; i++) {
    fill(arcColors[i]);
    arc(xPositions[i], 118, 60, 60, PI, TWO_PI);
  }

  for (let i = 0; i < 9; i++) {
    fill(arcColors[i + 9]);
    arc(xPositions[i], 248, 60, 60, 0, PI);
  }

  strokeWeight(1);

  stroke(320, 70, 100);
  line(lx0, 100, lx0, 300);
  line(lx2, 140, lx2, 260);

  stroke(320, 50, 100);
  line(lx1, 120, lx1, 280);
  line(lx3, 160, lx3, 240);

  stroke(320, 70, 100);
  line(rx0, 100, rx0, 300);
  line(rx2, 140, rx2, 260);

  stroke(320, 50, 100);
  line(rx1, 120, rx1, 280);
  line(rx3, 160, rx3, 240);

  noFill();
  stroke(270, 60, 100);
  rect(170, 140, 260, 90);

  let outerSize = 60;
  let innerSize = 20;

  stroke(0, 0, 100);
  strokeWeight(4);

  fill(180, 100, 50);
  circle(300, 190, outerSize);

  fill(0, 100, 100);
  circle(300, 190, innerSize);
}