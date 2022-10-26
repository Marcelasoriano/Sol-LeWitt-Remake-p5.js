function setup() {
  createCanvas(600, 600);
  fill(0);
  angleMode(DEGREES);
  frameRate(4);
}

function draw() {
  background(220);
  
  for (let x = 0; x < 12; x++) {
  for (let y = 0; y < 12; y++) {
  push()
  translate(25 + x * 50, 25 + y * 50);
  rotate(int(random(4)) * 90);
  arc(25, 25, 100, 100, 180, 270);
  pop()
  }
} 
}