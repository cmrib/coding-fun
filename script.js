let player;
let ball;
let barsize = 50

function setup() {
    createCanvas(500, 800);
    player = new Bar(barsize);
    ball = new Ball(random(-3, 3), -10);
}

function draw() {
    background(0);
    fill(255, 0, 0)
    rect(0, height - 20, width, height)
    fill(255, 0, 0)

    player.show();
    ball.show();
    ball.move();
    ball.edges(player.barsize, player.pos)
}


class Bar {
    constructor(barsize) {
        this.barsize = barsize
    }

    show() {

        this.pos = createVector(constrain(mouseX, 0, width - barsize), height);
        fill(255);
        noStroke();
        rect(this.pos.x, this.pos.y - 20, this.barsize, this.pos.y);
    }
}

class Ball {
    constructor(velx, vely) {
        this.ball_pos = createVector(width / 2, 200);
        this.vel = createVector(velx, vely);
    }

    show() {
        circle(this.ball_pos.x, this.ball_pos.y, 20);
    }

    move() {
        this.ball_pos.add(this.vel);
    }

    edges(barsize, bar_position) {

        if (this.ball_pos.x >= width || this.ball_pos.x <= 0) {
            this.vel.x *= -1;
        }

        if (this.ball_pos.y <= 0) {
            this.vel.y *= -1;
        }

        if (this.ball_pos.y == height - 20 && this.ball_pos.x > bar_position.x && this.ball_pos.x < bar_position.x + barsize) {
            this.vel.y *= -1;
        }
    }
}


