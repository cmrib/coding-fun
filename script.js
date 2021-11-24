var inc = 0


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    stroke(255);

    var xoff = map(noise(inc), 0, 1, 0, width);
    var yoff = map(noise(500 + inc), 0, 1, 0, height)
    var roff = map(noise(1000 + inc), 0, 1, 1, 200)
    fill(xoff, yoff, 0);
    circle(xoff, yoff, roff);
    inc += 0.01;
}
