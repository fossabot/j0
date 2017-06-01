(function(){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var graphicalEqual = function () {
	var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref) {
		var name = _ref.name,
		    url = _ref.url,
		    fn = _ref.fn,
		    xRange = _ref.xRange,
		    yRange = _ref.yRange,
		    _ref$xGrid = _ref.xGrid,
		    xGrid = _ref$xGrid === undefined ? [] : _ref$xGrid,
		    _ref$yGrid = _ref.yGrid,
		    yGrid = _ref$yGrid === undefined ? [] : _ref$yGrid,
		    _ref$threshold = _ref.threshold,
		    threshold = _ref$threshold === undefined ? canvasDefaultThreshold : _ref$threshold;

		var ctx, expectedColor, actualColor, _ctx$canvas, width, height, _xRange, minX, maxX, _yRange, minY, maxY, xScale, yScale, imageX, imageY, drawGridLines, isInside, drawGraph, img, expectedCanvasContext, sum, error;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						drawGraph = function drawGraph(context) {
							context.moveTo(imageX(minX), imageY(fn(minX)));
							var step = 0.5;
							var d = 0.000001;
							var state = false;
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
							for (var iX = 0; iX <= width; iX += step) {
								var x = minX + xScale * iX / width;
								var x1 = x - d;
								draw(x1, fn(x1));
								draw(x, fn(x));
								var x2 = x + d;
								draw(x2, fn(x2));
							}
							if (state) {
								context.stroke();
							}
						};

						isInside = function isInside(y) {
							return minY - yScale < y && y < maxY + yScale;
						};

						drawGridLines = function drawGridLines(context, drawLabel) {
							context.beginPath();
							for (var i = xGrid.length; i--;) {
								context.moveTo(imageX(xGrid[i]), 0);
								context.lineTo(imageX(xGrid[i]), height);
							}
							for (var _i = yGrid.length; _i--;) {
								context.moveTo(0, imageY(yGrid[_i]));
								context.lineTo(width, imageY(yGrid[_i]));
							}
							context.stroke();
							if (drawLabel) {
								assign(context, {
									lineWidth: 8,
									strokeStyle: '#fff',
									fillStyle: '#000',
									textAlign: 'center',
									textBaseline: 'bottom'
								});
								for (var _i2 = xGrid.length; _i2--;) {
									var value = xGrid[_i2];
									var label = labelText(value);
									context.strokeText(label, imageX(value), height);
									context.fillText(label, imageX(value), height);
								}
								assign(context, {
									textAlign: 'left',
									textBaseline: 'middle'
								});
								for (var _i3 = yGrid.length; _i3--;) {
									var _value = yGrid[_i3];
									var _label = labelText(_value);
									context.strokeText(_label, 0, imageY(_value));
									context.fillText(_label, 0, imageY(_value));
								}
							}
						};

						imageY = function imageY(y) {
							if (maxY < y) {
								y = maxY + yScale;
							} else if (y < minY) {
								y = minY - yScale;
							}
							return height * (1 - (y - minY) / yScale);
						};

						imageX = function imageX(x) {
							return width * (x - minX) / xScale;
						};

						ctx = getCanvasContext(name);
						expectedColor = '#f00';
						actualColor = '#090';
						_ctx$canvas = ctx.canvas, width = _ctx$canvas.width, height = _ctx$canvas.height;
						_xRange = _slicedToArray(xRange, 2), minX = _xRange[0], maxX = _xRange[1], _yRange = _slicedToArray(yRange, 2), minY = _yRange[0], maxY = _yRange[1];
						xScale = maxX - minX, yScale = maxY - minY;

						ctx.fillStyle = '#fff';
						ctx.fillRect(0, 0, width, height);
						// Draw graph
						ctx.lineWidth = 4;
						ctx.strokeStyle = expectedColor;
						drawGraph(ctx);

						if (!(downloader || !url)) {
							_context.next = 21;
							break;
						}

						document.body.appendChild(ctx.canvas);
						ctx.canvas.addEventListener('click', function () {
							window.open(ctx.canvas.toDataURL());
						});
						if (downloader) {
							// // downloader
							if (!/#/.test(name)) {
								ctx.canvas.toBlob(function (blob) {
									assign(document.createElement('a'), {
										href: URL.createObjectURL(blob),
										download: name.replace(/Math\./, '') + '.png'
									}).click();
								});
							}
						}
						throw new Error('No url for expected graph');

					case 21:
						img = document.createElement('img');
						_context.next = 24;
						return new Promise(function (resolve, reject) {
							assign(img, {
								onerror: function onerror(event) {
									reject(event.error || event);
								},
								onload: resolve,
								src: url
							});
						});

					case 24:
						expectedCanvasContext = getCanvasContext(name);

						expectedCanvasContext.drawImage(img, 0, 0, width, height);
						sum = canvasDiff(ctx.getImageData(0, 0, width, height).data, expectedCanvasContext.getImageData(0, 0, width, height).data);

						assign(expectedCanvasContext, {
							lineWidth: 2,
							strokeStyle: actualColor
						});
						drawGraph(expectedCanvasContext);
						assign(expectedCanvasContext, {
							lineWidth: 1,
							strokeStyle: '#000'
						});
						drawGridLines(expectedCanvasContext, true);
						assign(expectedCanvasContext, {
							textBaseline: 'top',
							textAlign: 'center',
							lineWidth: 8,
							strokeStyle: '#fff',
							fillStyle: expectedColor
						});
						expectedCanvasContext.strokeText('Expected', width / 2, 0);
						expectedCanvasContext.fillText('Expected', width / 2, 0);
						expectedCanvasContext.fillStyle = actualColor;
						expectedCanvasContext.strokeText('Actual', width / 2, expectedCanvasContext.lineHeight);
						expectedCanvasContext.fillText('Actual', width / 2, expectedCanvasContext.lineHeight);
						expectedCanvasContext.canvas.addEventListener('click', function () {
							this.clicked = !this.clicked;
							if (this.clicked) {
								this.style.width = width + 'px';
								this.style.height = height + 'px';
							} else {
								this.style.width = width / 2 + 'px';
								this.style.height = height / 2 + 'px';
							}
						});
						document.body.appendChild(expectedCanvasContext.canvas);

						if (!(threshold < sum)) {
							_context.next = 43;
							break;
						}

						error = new Error('The function seems to be wrong. Diff: ' + sum);

						error.code = 'EDIFF';
						throw error;

					case 43:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function graphicalEqual(_x2) {
		return _ref2.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint no-prototype-builtins: "off" */
function assign(obj, values) {
	for (var key in values) {
		if (values.hasOwnProperty(key)) {
			obj[key] = values[key];
		}
	}
	return obj;
}

function setVersion() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', window.root + '/package.json');
	xhr.onload = function () {
		var _JSON$parse = JSON.parse(xhr.response),
		    version = _JSON$parse.version;

		var elements = document.querySelectorAll('.version');
		for (var i = elements.length; i--;) {
			elements[i].textContent = version;
		}
	};
	xhr.send();
}

function approxEqual(a, b) {
	var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : assert.approxThreshold;

	if (Math.abs(a - b) < threshold) {
		return;
	}
	throw new Error('expected ' + a + ' to be approximately equal to ' + b);
}

function getCanvasContext(name) {
	var canvas = document.createElement('canvas');
	var size = 400;
	var lineHeight = 22;
	canvas.setAttribute('class', window.canvasTestClass);
	canvas.setAttribute('data-name', name);
	assign(canvas, {
		width: size,
		height: size
	});
	assign(canvas.style, {
		userSelect: 'none',
		transition: 'width 0.2s, height 0.2s',
		border: 'solid 1px #000',
		margin: '16px',
		width: size / 2 + 'px',
		height: size / 2 + 'px',
		cursor: 'pointer'
	});
	var ctx = canvas.getContext('2d');
	assign(ctx, {
		font: '20px Courier',
		lineHeight: lineHeight
	});
	return ctx;
}

function canvasDiff(a, b) {
	var sum = 0;
	for (var i = a.length; i--;) {
		var d = a[i] - b[i];
		sum += d < 0 ? -d : d;
	}
	return sum;
}

function labelText(value) {
	var absValue = value < 0 ? -value : value;
	if (value === 0) {
		return '0';
	} else if (absValue < 1) {
		return value.toFixed(2);
	} else if (absValue < 10) {
		return value.toFixed(1);
	}
	return value.toFixed(0);
}

var canvasDefaultThreshold = 160000;
var downloader = false;


function setAssert() {
	var assert = window.chai.assert;

	assert.approxThreshold = 0.000000000000001;
	assert.approxEqual = approxEqual;
	assert.graphicalEqual = graphicalEqual;
	window.assert = assert;
}

window.root = document.getElementById('root').textContent;
window.canvasTestClass = 'Canvas' + Date.now();
window.mocha.setup('bdd');
setAssert();
setVersion();
}())
