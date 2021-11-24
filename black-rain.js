var chuva = []

function setup() {
    createCanvas(900, 500)
    for (var x = 0; x < width; x++) {
        var pingo = new Pingo(x, random(width))
        chuva.push(pingo)
    }
}



function draw() {
    background(255)

    for (var x = 0; x < chuva.length; x++) {
        chuva[x].show()
        chuva[x].drop()
    }

}

class Pingo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {

        fill(200, 29, 255)
        line(this.x, this.y, this.x, this.y + 8)
    }

    drop() {
        this.y += 5 + (random(1, 6))
        if (this.y >= width) {
            this.y = -10
        }
    }

}