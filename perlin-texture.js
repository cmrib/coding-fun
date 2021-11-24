function setup() {
    createCanvas(200, 200);
    background(0);
    pixelDensity(1);  // for retina users
}

function draw() {
    var yoff = 0;
    var inc = 0.5

    loadPixels()
    for (var x = 0; x < width; x++) {
        var xoff = 0;
        for (var y = 0; y < height; y++) {
            var index = (x + y * width) * 4;
            var r = map(noise(xoff, yoff), 0, 1, 0, 255);
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            xoff += inc
        }
        yoff += inc
    }

    updatePixels();

}