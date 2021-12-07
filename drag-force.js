let mover
let dragC = 0.2
function setup() {
    createCanvas(400, 400);
    background(0);
    mover = new Mover(100, 0, 2);
}

function draw() {
    background(0);

    fill(255, 50);
    noStroke()
    rect(0, height / 2, width, height / 2)

    let gravity = createVector(0, 0.1);

    // weight = weight force
    let weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);

    if (mouseIsPressed) {
        let wind = createVector(0.1, 0);
        mover.applyForce(wind);
    }

    if (mover.pos.y > height / 2) {
        mover.drag(dragC)
    }

    mover.friction();
    mover.update();
    mover.edges();
    mover.show();
}


class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass) * 10;
    }

    update() {
        // let mouse = createVector(mouseX, mouseY);
        // this.acc = p5.Vector.sub(mouse, this.pos)
        // this.acc.setMag(3)
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    friction() {
        let diff = height - (this.pos.y + this.r);
        if (diff < 1) {
            // direction of friction
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);

            // magnitude of friction
            let mu = 0.1;
            let normal = this.mass;
            friction.setMag(mu * normal);
            this.applyForce(friction)
        }
    }

    drag(dragC) {
        // direction of drag
        let drag = this.vel.copy();
        drag.normalize();
        drag.mult(-1);

        let c = dragC // friction constat
        let speedSq = this.vel.magSq();
        drag.setMag(c * speedSq);
        this.applyForce(drag)

    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    show() {
        stroke(250);
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
            this.vel.x *= -1;
        }

        if (this.pos.x <= 0 + this.r) {
            this.pos.x = 0 + this.r;
            this.vel.x *= -1;
        }
    }
}