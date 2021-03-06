function setup() {
    createCanvas(600, 600);
    pixelDensity(1);
}

function draw() {
    background(51);
    loadPixels();

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = x;
            pixels[index + 1] = y;
            pixels[index + 2] = random(255);
            pixels[index + 3] = 255;
        }
    }

    updatePixels()
}