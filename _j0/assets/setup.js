function setVersion() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `${window.root}/package.json`);
	xhr.onload = function () {
		const {version} = JSON.parse(xhr.response);
		const elements = document.querySelectorAll('.version');
		for (let {length: i} = elements; i--;) {
			elements[i].textContent = version;
		}
	};
	xhr.send();
}

function approxEqual(a, b, threshold = assert.approxThreshold) {
	if (Math.abs(a - b) < threshold) {
		return;
	}
	throw new Error(`expected ${a} to be approximately equal to ${b}`);
}

function getCanvasContext(name) {
	const canvas = document.createElement('canvas');
	const size = 400;
	const lineHeight = 22;
	canvas.setAttribute('class', window.canvasTestClass);
	canvas.setAttribute('data-name', name);
	canvas.width = size;
	canvas.height = size;
	canvas.style.margin = '16px';
	canvas.style.width = `${size / 2}px`;
	canvas.style.height = `${size / 2}px`;
	const ctx = canvas.getContext('2d');
	ctx.font = '20px Courier';
	ctx.lineHeight = lineHeight;
	return ctx;
}

function canvasDiff(a, b) {
	let sum = 0;
	for (let {length: i} = a; i--;) {
		const d = a[i] - b[i];
		sum += d < 0 ? -d : d;
	}
	return sum;
}

const canvasDefaultThreshold = 10000;
async function graphicalEqual({
	name,
	url,
	fn,
	xRange,
	yRange,
	xGrid = [],
	yGrid = [],
	threshold = canvasDefaultThreshold
}) {
	const ctx = getCanvasContext(name);
	const expectedColor = '#f00';
	const actualColor = '#090';
	const {width, height} = ctx.canvas;
	const [[minX, maxX], [minY, maxY]] = [xRange, yRange];
	const [xScale, yScale] = [maxX - minX, maxY - minY];
	function imageX(x) {
		return width * (x - minY) / yScale;
	}
	function imageY(y) {
		return height * (1 - (y - minY) / yScale);
	}
	function drawGridLines(context) {
		context.beginPath();
		for (let {length: i} = xGrid; i--;) {
			context.moveTo(imageX(xGrid[i]), 0);
			context.lineTo(imageX(xGrid[i]), height);
		}
		for (let {length: i} = yGrid; i--;) {
			context.moveTo(0, imageY(yGrid[i]));
			context.lineTo(width, imageY(yGrid[i]));
		}
		context.stroke();
	}
	function drawGraph(context) {
		context.beginPath();
		context.moveTo(imageX(minX), imageY(fn(minX)));
		for (let iX = 0; iX <= width; iX++) {
			const x = minX + xScale * iX / width;
			context.lineTo(imageX(x), imageY(fn(x)));
		}
		context.stroke();
	}
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, width, height);
	// Draw grid lines
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#000';
	drawGridLines(ctx);
	// Draw graph
	ctx.lineWidth = 4;
	ctx.strokeStyle = expectedColor;
	drawGraph(ctx);
	if (!url) {
		ctx.canvas.style.cursor = 'pointer';
		document.body.appendChild(ctx.canvas);
		ctx.canvas.addEventListener('click', function () {
			window.open(ctx.canvas.toDataURL());
		});
		return;
	}
	const img = document.createElement('img');
	await new Promise(function (resolve, reject) {
		img.onerror = reject;
		img.onload = resolve;
		img.src = url;
	});
	const expectedCanvasContext = getCanvasContext(name);
	expectedCanvasContext.drawImage(img, 0, 0, width, height);
	const sum = canvasDiff(
		ctx.getImageData(0, 0, width, height).data,
		expectedCanvasContext.getImageData(0, 0, width, height).data
	);
	expectedCanvasContext.lineWidth = 4;
	expectedCanvasContext.strokeStyle = actualColor;
	drawGraph(expectedCanvasContext);
	expectedCanvasContext.textBaseline = 'top';
	expectedCanvasContext.textAlign = 'center';
	expectedCanvasContext.lineWidth = 8;
	expectedCanvasContext.strokeStyle = '#fff';
	expectedCanvasContext.fillStyle = expectedColor;
	expectedCanvasContext.strokeText('Expected', width / 2, 0);
	expectedCanvasContext.fillText('Expected', width / 2, 0);
	expectedCanvasContext.fillStyle = actualColor;
	expectedCanvasContext.strokeText('Actual', width / 2, expectedCanvasContext.lineHeight);
	expectedCanvasContext.fillText('Actual', width / 2, expectedCanvasContext.lineHeight);
	document.body.appendChild(expectedCanvasContext.canvas);
	if (threshold < sum) {
		throw new Error('The function seems to be wrong.');
	}
}

function setAssert() {
	const {assert} = window.chai;
	assert.approxThreshold = 0.000000000000001;
	assert.approxEqual = approxEqual;
	assert.graphicalEqual = graphicalEqual;
	window.assert = assert;
}

window.root = document.getElementById('root').textContent;
window.canvasTestClass = `Canvas${Date.now()}`;
window.mocha.setup('bdd');
setAssert();
setVersion();
