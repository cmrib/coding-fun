function setup() {
    createCanvas(400, 400);
}

let xoff = 0;
let start = 0;
let increment = 0.01;

function draw() {

    background(200);
    noFill();
    xoff = start
    beginShape();
    for (let x = 0; x < width; x++) {
        var noisim = map(noise(xoff), 0, 1, -50, 50)
        var sim = map(sin(xoff), -1, 1, 0, width)
        let y = sim + noisim
        point(x, y)
        vertex(x, y)
        xoff += increment;
    }
    endShape()
    start += increment;

}
