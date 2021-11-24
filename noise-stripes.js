function setup() {
    createCanvas(500, 500);
    background(0)
    pixelDensity(1)
}

var increment = 0.01
function draw() {
    var xoff = 0;

    loadPixels();

    for (var y = 0; y < height / 2; y++) {
        for (var x = 0; x < width / 2; x++) {
            var r = map(noise(xoff + increment), 0, 1, 0, 255)

            index = (x + y * width) * 4
            pixels[index + 0] = r
            pixels[index + 1] = r
            pixels[index + 2] = r
            pixels[index + 3] = 255
            increment += 0.01
        }
    }


    noLoop()
    updatePixels()

}