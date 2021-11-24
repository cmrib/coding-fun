function setup() {
    createCanvas(400, 400)
}

var xoff = 0
var start = 0
var increment = 0.03

function draw() {
    background(100)

    xoff = start
    noFill()
    beginShape()
    for (var x = 0; x < width; x++) {
        var y = map(noise(xoff), 0, 1, 0, height)
        vertex(x, y)
        point(x, y)
        xoff += increment
    }
    endShape()
    start += increment
}