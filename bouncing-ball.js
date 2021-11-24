let x;
let y;
let xspeed;
let yspeed;

function setup() {
    createCanvas(600, 400);
    x = width / 2;
    y = height / 2;
    xspeed = 20;
    yspeed = 20;
}

function draw() {

    background(0);
    fill(255, 0, 0)
    ellipse(x, y, 20)

    if (x >= width || x <= 0) {
        xspeed = xspeed * -1;
    }

    if (y >= height || y <= 0) {
        yspeed = yspeed * -1;
    }

    x = x + xspeed;
    y = y + yspeed
}