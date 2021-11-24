function setup() {
    createCanvas(400, 400)
    v1 = createVector(width / 2, height / 2)
}

let xspeed = 2
let yspeed = 3

function draw() {

    background(0)
    v1.x += xspeed;
    v1.y += yspeed;
    fill(255, 0, 0);
    circle(v1.x, v1.y, 20);
    fill(0, 0, 255)
    rect(width - 20, mouseY, 20, 100)

    if (v1.x > width || v1.x < 0) {
        xspeed = xspeed * -1
    }

    if (v1.y > height || v1.y < 0) {
        yspeed = yspeed * -1
    }

}
