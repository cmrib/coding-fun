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
        //mover.lines()
    });

}

class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(-0.001, 0.1)
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos)
        this.acc.setMag(.7)
        this.vel.add(this.acc)
        this.vel.limit(5)
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

}