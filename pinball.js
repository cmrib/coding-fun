let player;
let ball;

function setup() {
    createCanvas(500, 800);
    player = new Bar();
    ball = new Ball(random(-3, 3), -10);
}

function draw() {
    background(0);
    player.show();
    ball.show();
    ball.move();
    ball.edges(player.pos)
}


class Bar {
    constructor() {
    }

    show() {
        //this.pos.x = constrain(mouseX, 0, width)
        this.pos = createVector(constrain(mouseX, 0, width - 100), height - 20);
        fill(255);
        rect(this.pos.x, this.pos.y - 20, 100, this.pos.y);
    }
}

class Ball {
    constructor(velx, vely) {
        this.pos = createVector(width / 2, 200);
        this.vel = createVector(velx, vely);
    }

    show() {
        circle(this.pos.x, this.pos.y, 30);
    }

    move() {
        this.pos.add(this.vel);
    }

    edges(bar_position) {

        if (this.pos.x >= width || this.pos.x <= 0) {
            this.vel.x *= -1;
        }

        if (this.pos.y <= 0) {
            this.vel.y *= -1;
        }

        if (this.pos.y >= height - 45 && this.pos.x <= bar_position.x + 100) {
            this.vel.y *= -1;
        }

        if (this.pos.y > height) {
            background(255, 0, 0)
        }
    }
}