var font

function preload() {
	font = loadFont("./Roboto-Black.ttf")
}

function setup() {
	createCanvas(800, 450)
	background(51)
	textFont(font)
	textStyle(BOLD)
	fill(255)
	noStroke()
	textSize(200)

	var bounds = font.textBounds("is", 400, 280)
	var points = font.textToPoints("is", (width - bounds.w - 80) / 2, 280)
	text("is", (width - bounds.w - 80) / 2, 280)

	console.log(points)
}

function draw() {}
