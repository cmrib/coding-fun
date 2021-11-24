let randomCounts

function setup() {
    createCanvas(640, 240);
    randomCounts = [];
    randomCounts.length = 20;
    for (let i = 0; i < randomCounts.length; i++) {
        randomCounts[i] = 1;
    }
}


function draw() {
    background(255);

    let index = Math.floor(random(randomCounts.length));
    randomCounts[index] += 1;

    stroke(0);
    fill(175, 25, 30);

    let w = width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}


//Create a random walker with dynamic probabilities. For example, can you give it a 50% chance of moving in the direction of the mouse?