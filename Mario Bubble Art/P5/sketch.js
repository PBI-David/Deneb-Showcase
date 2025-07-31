let img
let hexColors = []

function preload() {
	// Replace with your image path or URL
	img = loadImage("/shrek.jpg")
}

function setup() {
	createCanvas(100, 100)
	img.resize(100, 100)
	img.loadPixels()
	for (let y = 0; y < img.height; y++) {
		let rowPixels = []
		for (let x = 0; x < img.width; x++) {
			let index = (x + y * img.width) * 4
			let r = img.pixels[index]
			let g = img.pixels[index + 1]
			let b = img.pixels[index + 2]
			let hex = "#" + hexColor(r, g, b)
			rowPixels.push(hex)
		}
		hexColors.push(rowPixels)
	}

	noLoop() // Stop draw from looping
	console.log(hexColors)
}

function draw() {
	background(220)
}

// Helper function to convert RGB to hex
function hexColor(r, g, b) {
	return nf(r.toString(16), 2) + nf(g.toString(16), 2) + nf(b.toString(16), 2)
}
