let angle = 0;
let interAngle = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    rectMode(CENTER);
    background(0);
}

function draw() {

    background(0, 20)
    // first triangle
    push()
    translate(200, 200);
    rotate(angle);
    fill(146, 83, 161)
    noStroke()
    rect(0, 0, 100, 50);
    pop()

    // second triangle
    push()
    translate(200, 200)
    rotate(-angle)
    fill(240, 99, 164)
    noStroke()
    rect(0, 0, 30, 30)
    pop()

    angle += 2;
}