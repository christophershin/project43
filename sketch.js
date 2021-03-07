var hours, minutes, seconds;

function setup() {
  createCanvas(800,400);
  hr=hour()
  mn=minute()
  sc=second()
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  drawSprites();
  scAngle=map(sc,0,60,0,360)
  mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr,0,12,0,360)

  push()
  rotate(scAngle)
  stroke("red")
  strokeWeight(7)
  line(50,100,80,0 )
  pop()

  push()
  rotate(mnAngle)
  stroke("green")
  strokeWeight(7)
  line(50,100,80,0 )
  pop()

  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(7)
  line(60,100,80,0 )
  pop()
}