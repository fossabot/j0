/* eslint no-prototype-builtins: "off", max-statements: "off", no-magic-numbers: "off" */
import {
	thermalRGB,
	Object
} from 'j0';

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
	Object.assign(canvas, {
		width: size,
		height: size
	});
	Object.assign(canvas.style, {
		userSelect: 'none',
		transition: 'width 0.2s, height 0.2s',
		border: 'solid 1px #000',
		margin: '16px',
		width: `${size / 2}px`,
		height: `${size / 2}px`,
		cursor: 'pointer'
	});
	const ctx = canvas.getContext('2d');
	Object.assign(ctx, {
		font: '20px Courier',
		lineHeight
	});
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

const canvasDefaultThreshold = 160000;
const downloader = false;
async function graphicalEqual({
	name,
	url,
	fn,
	xRange,
	yRange,
	zRange,
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
			Object.assign(context, {
				lineWidth: 8,
				strokeStyle: '#fff',
				fillStyle: '#000',
				textAlign: 'center',
				textBaseline: 'bottom'
			});
			for (let {length: i} = xGrid; i--;) {
				const value = xGrid[i];
				const label = labelText(value);
				context.strokeText(label, imageX(value), height);
				context.fillText(label, imageX(value), height);
			}
			Object.assign(context, {
				textAlign: 'left',
				textBaseline: 'middle'
			});
			for (let {length: i} = yGrid; i--;) {
				const value = yGrid[i];
				const label = labelText(value);
				context.strokeText(label, 0, imageY(value));
				context.fillText(label, 0, imageY(value));
			}
		}
	}
	function isInside(y) {
		return minY - yScale < y && y < maxY + yScale;
	}
	function drawXYGraph(context) {
		context.moveTo(imageX(minX), imageY(fn(minX)));
		const step = 0.5;
		const d = 0.000001;
		let state = false;
		function draw(x, y) {
			if (x < minX || maxX < x) {
				return;
			}
			if (isInside(y)) {
				if (state) {
					context.lineTo(imageX(x), imageY(y));
				} else {
					context.beginPath();
					state = true;
					context.moveTo(imageX(x), imageY(y));
				}
			} else {
				if (state) {
					context.stroke();
				}
				state = false;
			}
		}
		for (let iX = 0; iX <= width; iX += step) {
			const x = minX + xScale * iX / width;
			const x1 = x - d;
			draw(x1, fn(x1));
			draw(x, fn(x));
			const x2 = x + d;
			draw(x2, fn(x2));
		}
		if (state) {
			context.stroke();
		}
	}
	function drawXYZGraph(context) {
		const [minZ, maxZ] = zRange;
		const zScale = maxZ - minZ;
		for (let x = 0; x < width; x += 2) {
			for (let y = 0; y < height; y += 2) {
				const z = fn(
					minX + xScale * x / width,
					minY + yScale * (1 - y / width)
				);
				const r = (z - minZ) / zScale;
				context.fillStyle = thermalRGB.css(r);
				context.fillRect(x, y, 2, 2);
			}
		}
	}
	const drawGraph = zRange ? drawXYZGraph : drawXYGraph;
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, width, height);
	// Draw graph
	ctx.lineWidth = 4;
	ctx.strokeStyle = expectedColor;
	drawGraph(ctx);
	if (downloader || !url) {
		document.body.appendChild(ctx.canvas);
		ctx.canvas.addEventListener('click', function () {
			ctx.canvas.toBlob(function (blob) {
				Object.assign(document.createElement('a'), {
					href: URL.createObjectURL(blob),
					download: `${name.replace(/Math\./, '')}.png`
				})
				.click();
			});
		});
		if (downloader) {
			// downloader
			if (!(/#/).test(name)) {
				ctx.canvas.toBlob(function (blob) {
					Object.assign(document.createElement('a'), {
						href: URL.createObjectURL(blob),
						download: `${name.replace(/Math\./, '')}.png`
					})
					.click();
				});
			}
		}
		throw new Error('No url for expected graph');
	}
	const img = document.createElement('img');
	await new Promise(function (resolve, reject) {
		Object.assign(img, {
			onerror: function (event) {
				reject(event.error || event);
			},
			onload: resolve,
			src: url
		});
	});
	const expectedCanvasContext = getCanvasContext(name);
	expectedCanvasContext.drawImage(img, 0, 0, width, height);
	const sum = canvasDiff(
		ctx.getImageData(0, 0, width, height).data,
		expectedCanvasContext.getImageData(0, 0, width, height).data
	);
	Object.assign(expectedCanvasContext, {
		lineWidth: 2,
		strokeStyle: actualColor
	});
	drawGraph(expectedCanvasContext);
	Object.assign(expectedCanvasContext, {
		lineWidth: 1,
		strokeStyle: '#000'
	});
	drawGridLines(expectedCanvasContext, true);
	Object.assign(expectedCanvasContext, {
		textBaseline: 'top',
		textAlign: 'center',
		lineWidth: 8,
		strokeStyle: '#fff',
		fillStyle: expectedColor
	});
	if (!zRange) {
		expectedCanvasContext.strokeText('Expected', width / 2, 0);
		expectedCanvasContext.fillText('Expected', width / 2, 0);
		expectedCanvasContext.fillStyle = actualColor;
		expectedCanvasContext.strokeText('Actual', width / 2, expectedCanvasContext.lineHeight);
		expectedCanvasContext.fillText('Actual', width / 2, expectedCanvasContext.lineHeight);
	}
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
		const error = new Error(`The function seems to be wrong. Diff: ${sum}`);
		error.code = 'EDIFF';
		throw error;
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
