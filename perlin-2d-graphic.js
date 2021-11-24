function setup() {
    createCanvas(200, 200)
}

var increment = 0.01

function draw() {
    loadPixels();
    background(51);
    stroke(255);
    noFill();


    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = 255;
            pixels[index + 1] = 25;
            pixels[index + 2] = 255;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();
}