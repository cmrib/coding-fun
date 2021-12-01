
function setup() {
    createCanvas(640, 360);
    background(0)
}

function draw() {

    background(0);
    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width / 2, height / 2);



    let minus = p5.Vector.sub(mouse, center);
    let plus = p5.Vector.add(mouse, center);

    //translate(width / 2, height / 2)

    //minus.setMag(minus.mag())

    stroke(255, 0, 0);
    line(0, 0, mouse.x, mouse.y);

    stroke(0, 255, 0);
    line(0, 0, center.x, center.y);

    stroke(39, 110, 70)
    line(mouseX, mouseY, minus.x, minus.y)
    stroke(100, 25, 130)
    line(mouseX, mouseY, center.x, center.y)

    stroke(0, 0, 255);
    line(0, 0, minus.x, minus.y);

    stroke(190, 114, 70);
    line(0, 0, plus.x, plus.y);

}