let bubble;

function setup() {
    createCanvas(400, 400);
    background(0);
    bubble = new Bubble(200, 200);
}

function draw() {
    background(0)
    bubble.show()
    bubble.update()
    bubble.reset()
}

class Bubble {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(1, -1)
    }

    update() {
        this.pos.add(this.vel)
        //     this.pos.y = this.pos.y + random(-1, 1)
        //     this.pos.x = this.pos.x + random(-1, 1)
    }

    show() {
        stroke(255, 100)
        strokeWeight(2);
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, 30);
    }

    reset() {
        if (this.pos.x >= width + 30) {
            this.pos.x = 0;
        }
    }
}