let bubbles = [];

function setup() {
    createCanvas(150, 400);
}

function draw() {
    background(0);

    let b = new Bubble(width / 2, height, 10);
    bubbles.push(b);

    bubbles.forEach(bubble => {
        bubble.show();
        bubble.move();
        bubble.fade();

    });
    bubbles = bubbles.filter((bubble) => bubble.brightness > 0);

}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 200;
    }

    move() {
        this.x += random(-3, 3)
        this.y -= 2;
    }

    show() {
        noStroke(255);
        fill(180, this.brightness);
        ellipse(this.x, this.y, this.r * 2);
    }

    fade() {
        this.brightness -= 1;
    }


}