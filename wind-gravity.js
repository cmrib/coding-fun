function setup() {
    createCanvas(400, 400);
    background(0);
    mover = new Mover(200, 200);
}

function draw() {
    background(0)
    let gravity = createVector(0, 0.1)
    mover.applyForce(gravity)

    if (mouseIsPressed) {
        let wind = createVector(0.1, 0)
        mover.applyForce(wind)
    }
    mover.update();
    mover.edges();
    mover.show();
}

class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0)
        this.r = 15
    }

    update() {
        // let mouse = createVector(mouseX, mouseY);
        // this.acc = p5.Vector.sub(mouse, this.pos)
        // this.acc.setMag(3)
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        stroke(250)
        fill(180, 150);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }

    edges() {
        if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
        }
        if (this.pos.x >= width - this.r) {
            this.pos.x = 400 - this.r;
            this.vel.x *= -1
        }
        if (this.pos.x <= 0 + this.r) {
            this.pos.x = 0 + this.r;
            this.vel.x *= -1;
        }
    }
}