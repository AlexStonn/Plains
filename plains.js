let xoff1 = 0;
let xoff2 = 2000;
let c1, rgb;

function setup() {
  createCanvas(800, 800); 
  rgb = int(random(3));
}

function draw() {
  colorMode(HSB, 300, 1 , 10);
  switch(rgb){
    case 0: background(140, 1,  4); break;
    case 1: background(140, 0,  4); break;
    case 2: background(230, 1, 10); break;
  }
  c1 = random(200); 
  
  drawPlain(  9, 8000,    0,     width,  2, 0.05, 10);
  drawPlain( 10, 3000,    0, 2 * width,  4, 0.05, 30);
  drawPlain( 10, 3000,  -50,     width,  5, 0.04, 10);
  drawPlain( 10, 3000, -150,     width,  6, 0.04, 10);
  drawPlain(  2, 3000, -150,     width,  7, 0.04, 10);
  drawPlain(2.5, 2000,    0, width/1.5, 15, 0.04, 10);
  drawPlain(2.5, 2000,    0, width/1.5, 15, 0.04, 10);
  noLoop();
}

function drawPlain(tDiv, counter, x3, x4, st3, sw, r2) {
  push();
  translate(0, random(height / tDiv));
  beginShape(TESS);
  var x;
  var y;
  var xoff = 0;
  for (var i = 0; i < counter; i++) {
    x = map(noise(xoff1), 0, 1, x3, x4);
    y = map(noise(xoff2), 0, 1, 0, height);
    stroke(c1, 1, st3);
    strokeWeight(sw);
    noFill();

    vertex(x, y);
    vertex(x + random(10, r2), y);
    vertex(x + random(-50, 50), y + random(650));

    xoff1 += 0.001;
    xoff2 += 0.001;
  }
  endShape();
  pop();
}













