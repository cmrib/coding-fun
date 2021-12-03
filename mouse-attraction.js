let movers = []

function setup() {
    createCanvas(800, 400);
    background(0)
    for (var x = 0; x < 10; x++) {
        mover = new Mover(random(width), random(height));
        movers.push(mover);
    }
}

function draw() {
    background(0)

    movers.forEach(mover => {
        mover.show();
        mover.update();
    });
}

function mouseClicked() {
    movers.forEach(mover => {
        mover.slow()
    });
}


class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(-0.001, 0.1)
        this.limiter = 10
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos)
        this.acc.setMag(3)
        this.vel.add(this.acc)
        this.vel.limit(this.limiter)
        this.pos.add(this.vel)
    }

    show() {
        fill(230, 150);
        circle(this.pos.x, this.pos.y, 35);
    }

    lines() {
        stroke(255, 0, 0)
        line(this.pos.x, this.pos.y, mouseX, mouseY)
    }

    slow() {
        if (this.limiter == 10)
            this.limiter = 1
        else
            this.limiter = 10
    }

}