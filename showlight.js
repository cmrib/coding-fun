var lights

function setup() {
    lights = []
    createCanvas(400, 400);
}

function draw() {
    background(0)
    translate(width / 2, height / 2)

    lights.forEach(light => {
        light.show()
        light.grow()
        light.fade()
    });

    lights = lights.filter((light) => light.brightness > 0);
}

function mouseDragged() {
    for (var x = 0; x < 10; x++) {
        let light = new Light()
        lights.push(light)
    }
}

class Light {
    constructor() {
        this.pos = createVector(-1, 1)
        this.vel = p5.Vector.random2D()
        this.brightness = 255
    }

    show() {
        //v.mult(random(30, 300))
        strokeWeight(2);
        stroke(100, 0, random(150), this.brightness);
        line(-5, -180, this.pos.x, this.pos.y);
    }

    grow() {
        this.vel.mult(1.02)
        this.pos.add(this.vel)
    }

    fade() {
        this.brightness += -1.3
    }
}
