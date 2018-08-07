
var spaceImage;

function setup() {
    createCanvas(windowWidth, windowHeight);
    spaceImage = generateSpaceImage();
}

function draw() {
    image(spaceImage, 0, 0);
}

function generateSpaceImage() {
    let image = createGraphics(width, height);
	image.pixelDensity(1);
	image.noSmooth();
    let backgroundColor = color('#1F1F1F');
    let purple = color('#4a455a');
    image.background(backgroundColor);
    for (let i = 0; i < width; i++) {
        let mappedWidth = map(i, 0, width, -1, 1);
        let lerpedPurple = lerpColor(purple, backgroundColor, abs(mappedWidth));
        image.stroke(lerpedPurple);
        image.line(i, 0, i, height);
    }
	let maxStars = width;
	let starWarm = color('#eaeace');
	let starCold = color('#ffc4c4');
	let starHot = color('#ceeae9');
	for (let i = 0; i < maxStars; i++) {
		let locationX = random(0, width);
		let locationY = random(0, height);
		let starSize = random(0.1, 1.5);
		let randomAlpha = random(1, 200);
		let pickColor = floor(random(0, 3));
		let strokeColor;
		if (pickColor === 0) {
			strokeColor = starWarm;
		} else if (pickColor === 1) {
			strokeColor = starCold;
		} else {
			strokeColor = starHot;
		}
		strokeColor.setAlpha(randomAlpha);
		image.stroke(strokeColor);
		image.strokeWeight(starSize);
		image.point(locationX, locationY);
	}
    return image;
}
