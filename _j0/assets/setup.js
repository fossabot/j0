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
	canvas.style.userSelect = 'none';
	canvas.style.transition = 'width 0.2s, height 0.2s';
	canvas.style.border = 'solid 1px #000';
	canvas.style.margin = '16px';
	canvas.style.width = `${size / 2}px`;
	canvas.style.height = `${size / 2}px`;
	canvas.style.cursor = 'pointer';
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

function labelText(value) {
	const absValue = value < 0 ? -value : value;
	if (value === 0) {
		return '0';
	} else if (absValue < 1) {
		return value.toFixed(2);
	} else if (absValue < 10) {
		return value.toFixed(1);
	}
	return value.toFixed(0);
}

const canvasDefaultThreshold = 100000;
const downloader = false;
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
		return width * (x - minX) / xScale;
	}
	function imageY(y) {
		if (maxY < y) {
			y = maxY + yScale;
		} else if (y < minY) {
			y = minY - yScale;
		}
		return height * (1 - (y - minY) / yScale);
	}
	function drawGridLines(context, drawLabel) {
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
		if (drawLabel) {
			context.lineWidth = 8;
			context.strokeStyle = '#fff';
			context.fillStyle = '#000';
			context.textAlign = 'center';
			context.textBaseline = 'bottom';
			for (let {length: i} = xGrid; i--;) {
				const value = xGrid[i];
				const label = labelText(value);
				context.strokeText(label, imageX(value), height);
				context.fillText(label, imageX(value), height);
			}
			context.textAlign = 'left';
			context.textBaseline = 'middle';
			for (let {length: i} = yGrid; i--;) {
				const value = yGrid[i];
				const label = labelText(value);
				context.strokeText(label, 0, imageY(value));
				context.fillText(label, 0, imageY(value));
			}
		}
	}
	function isOutside(y) {
		return y < minY || maxY < y;
	}
	function drawGraph(context) {
		context.moveTo(imageX(minX), imageY(fn(minX)));
		const step = 0.5;
		const d = 0.0000001;
		let state = false;
		function draw(x, y) {
			if (isOutside(y)) {
				if (state) {
					context.stroke();
				}
				state = false;
			} else if (state) {
				context.lineTo(imageX(x), imageY(y));
			} else {
				context.beginPath();
				state = true;
				context.moveTo(imageX(x), imageY(y));
			}
		}
		for (let iX = 0; iX <= width; iX += step) {
			const x = minX + xScale * iX / width;
			const x1 = x - d;
			draw(x1, fn(x1));
			const x2 = x + d;
			draw(x2, fn(x2));
		}
		if (state) {
			context.stroke();
		}
	}
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, width, height);
	// Draw grid lines
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#000';
	// Draw graph
	ctx.lineWidth = 4;
	ctx.strokeStyle = expectedColor;
	drawGraph(ctx);
	if (downloader || !url) {
		document.body.appendChild(ctx.canvas);
		ctx.canvas.addEventListener('click', function () {
			window.open(ctx.canvas.toDataURL());
		});
		if (downloader) {
			// // downloader
			if (!(/#/).test(name)) {
				ctx.canvas.toBlob(function (blob) {
					const a = document.createElement('a');
					a.href = URL.createObjectURL(blob);
					a.download = `${name.replace(/Math\./, '')}.png`;
					a.click();
				});
			}
		}
		throw new Error('No url for expected graph');
	}
	const img = document.createElement('img');
	await new Promise(function (resolve, reject) {
		img.onerror = function (event) {
			reject(event.error || event);
		};
		img.onload = resolve;
		img.src = url;
	});
	const expectedCanvasContext = getCanvasContext(name);
	expectedCanvasContext.drawImage(img, 0, 0, width, height);
	const sum = canvasDiff(
		ctx.getImageData(0, 0, width, height).data,
		expectedCanvasContext.getImageData(0, 0, width, height).data
	);
	expectedCanvasContext.lineWidth = 2;
	expectedCanvasContext.strokeStyle = actualColor;
	drawGraph(expectedCanvasContext);
	expectedCanvasContext.lineWidth = 1;
	expectedCanvasContext.strokeStyle = '#000';
	drawGridLines(expectedCanvasContext, true);
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
	expectedCanvasContext.canvas.addEventListener('click', function () {
		this.clicked = !this.clicked;
		if (this.clicked) {
			this.style.width = `${width}px`;
			this.style.height = `${height}px`;
		} else {
			this.style.width = `${width / 2}px`;
			this.style.height = `${height / 2}px`;
		}
	});
	document.body.appendChild(expectedCanvasContext.canvas);
	if (threshold < sum) {
		throw new Error(`The function seems to be wrong. Diff: ${sum}`);
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
