let x = 0;
let xspeed = 3;
let y = 0;
let yspeed = 15;

function setup() {
    createCanvas(600, 300)
}

function draw() {

    let col1 = map(x, 0, width, 0, 200);
    let col2 = map(x, 0, width, 200, 0);
    background(col1, 0, col2);

    fill(255);
    circle(x, y, 30);
    x += xspeed;
    y += yspeed;

    if (x >= width || x <= 0) {
        xspeed = xspeed * (-1);
    }

    if (y >= height || y <= 0) {
        yspeed = yspeed * (-1);
    }
}
