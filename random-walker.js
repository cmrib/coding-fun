function setup() {
    createCanvas(500, 500)
    background(0);
}

var x = 0;
var y = 0;

function draw() {
    fill(255);
    rectMode(CENTER);
    noStroke();
    x += int(random(0, 3)) - 1;
    y += int(random(0, 3)) - 1;
    rect(width / 2 + x, height / 2 + y, 6, 6);

}