var myImage;
var myCurosr;

function preload() {
    myImage = loadImage("./assets/albero.jpg")
    myCursor = loadImage("./assets/rombo.png")
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    // Deal with microphone
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    //Microfono
    var volume = mic.getLevel();
    
    //Sfondo
    background("black");
    image(myImage, 50, 0, windowWidth / 3, windowHeight);

    if (mouseX <= width / 2) {
        image(myImage, 50, 0, windowWidth / 3, windowHeight);
    } else {
        myImage.filter("invert");
    }
    //Cursore
    image(myCursor, mouseX, mouseY, windowWidth/50, windowHeight/25);
    
    //Rettangolo1
    noStroke();
    fill(255, 255, 255, 200);
    rect(0, 50, windowWidth / 3, windowHeight / 2);

    //Rettangolo2
    noStroke();
    fill(255, 255, 255, 200);
    rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2);

    //2017
    fill("red");
    textFont("Share Tech Mono");
    textSize(32);
    text("~2017.", windowWidth / 8, windowHeight / 2);

    
    //Cerchio
    push();
    translate(width / 3, height / 7);
    var minSize = width / 20;
    var maxSize = width;
    var size = map(volume, 0, 1, minSize, maxSize);
    fill("red");
    ellipse(0, 0, size);
    pop();

    //Triangolo
    push();
    fill("red");
    scale(windowResized);
    triangle(30, 75, 58, 20, 86, 75);
    pop();
    
    //Merry Christmas
    push();
    var minSize = windowWidth / 20;
    var maxSize = windowWidth;
    var size = map(volume, 0, 1, minSize, maxSize);
    fill("gray");
    textFont("Share Tech Mono");
    textSize(1 * size);
    text("[-MERRY CHRISTMAS!]", windowWidth / 8, windowHeight / 3);
    pop();

    //Linea
    strokeWeight(5);
    stroke("black");
    line(0, 150, 150, 150);
        
    //Stella
    push();
    translate(windowWidth / 8, windowHeight / 1.2);
    var minSize = width / 100;
    var maxSize = width;
    var size = map(volume, 0, 0.5, minSize, maxSize);
    scale(1 / 100 * size);
    noStroke();
    fill("yellow");
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);

}

//Funzione Stella
function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius2;
        var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
