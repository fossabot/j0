var assert = require('assert');
var cubicBezier = require('../lib/cubicBezier');

describe('cubicBezier', function () {

	it('should be linear', function () {
		var t;
		var d;
		var sum = 0;
		for (t = 0; t <= 1; t += 0.1) {
			d = cubicBezier(0, 0, 1, 1, t) - t;
			sum += d * d;
		}
		assert.equal(sum < 0.0001, true);
	});

});

require('../lib/location').search.replace(/grep=cubicBezier/, function () {
	var onError = require('../lib/onError');
	require('../lib/getBody').then(function (body) {
		var window = require('../lib/window');
		var preventDefault = require('../lib/preventDefault');
		var addEventListener = require('../lib/addEventListener');
		var removeEventListener = require('../lib/removeEventListener');
		var appendChild = require('../lib/appendChild');
		var createElement = require('../lib/createElement');
		var getContext = require('../lib/getContext');
		var getBoundingClientRect = require('../lib/getBoundingClientRect');
		var requestAnimationFrame = require('../lib/requestAnimationFrame');
		var px = require('../lib/px');
		var setStyle = require('../lib/setStyle');
		var Math = require('../lib/Math');
		var setTextContent = require('../lib/setTextContent');
		var parseInt = require('../lib/parseInt');
		var canvas = createElement({
			t: 'canvas',
			a: [
				['style', 'position:absolute;left:0;right:0;top:0;bottom:0']
			]
		});
		var preview = createElement({
			t: 'canvas',
			a: [
				['style', 'position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none']
			]
		});
		var N_PSIZE = 10;
		var offsetX;
		var offsetY;
		var x;
		var y;
		var decodeX;
		var decodeY;
		var w;
		var h;
		var updateEnvironment = function () {
			var rect = getBoundingClientRect(container);
			preview.width = canvas.width = rect.width;
			preview.height = canvas.height = rect.height;
			offsetX = (canvas.width - N_SIZE) / 2;
			offsetY = canvas.height - N_SIZE * 1.2;
			w = N_SIZE;
			h = N_SIZE;
			x = function (value) {
				return offsetX + w * value;
			};
			decodeX = function (value) {
				return (value - offsetX) / w;
			};
			y = function (value) {
				return offsetY + h * (1 - value);
			};
			decodeY = function (value) {
				return 1 - (value - offsetY) / h;
			};
		};
		var render = function () {
			var ctx = getContext(canvas);
			var s;
			updateEnvironment();
			ctx.lineCap = 'round';
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.lineWidth = 1;
			ctx.strokeStyle = 'rgba(0,0,0,0.4)';
			ctx.beginPath();
			ctx.moveTo(x(0), y(0));
			ctx.lineTo(x(0), y(1));
			ctx.lineTo(x(1), y(1));
			ctx.lineTo(x(1), y(0));
			ctx.closePath();
			ctx.stroke();

			ctx.lineWidth = 8;
			ctx.strokeStyle = 'rgba(255,255,255,0.5)';
			ctx.beginPath();
			ctx.moveTo(x(0), y(0));
			ctx.bezierCurveTo(x(p1.x), y(p1.y), x(p2.x), y(p2.y), x(1), y(1));
			ctx.stroke();

			ctx.lineWidth = 1;
			ctx.strokeStyle = '#666666';
			ctx.beginPath();
			ctx.moveTo(x(0), y(0));
			ctx.lineTo(x(p1.x), y(p1.y));
			ctx.moveTo(x(1), y(1));
			ctx.lineTo(x(p2.x), y(p2.y));
			ctx.stroke();

			ctx.lineWidth = 1;
			ctx.strokeStyle = '#ff0000';
			ctx.beginPath();
			ctx.moveTo(x(0), y(0));
			for (s = 0; s < 1; s += 0.002) {
				ctx.lineTo(x(s), y(cubicBezier(p1.x, p1.y, p2.x, p2.y, s)));
			}
			ctx.stroke();
		};
		var movePoint = function (p, xPos, yPos) {
			p.x = xPos;
			p.y = yPos;
			setStyle(p, 'left', px(x(xPos).toFixed(1)));
			setStyle(p, 'top', px(y(yPos).toFixed(1)));
			setTextContent(p, [
				'\n' + (100 * xPos).toFixed(0),
				(100 * yPos).toFixed(0)
			].join(','));
		};
		var O_Point = {
			a: [
				['style', [
					'cursor:pointer',
					'background-color:#333',
					'border-radius:50%',
					'position:absolute',
					'width:' + px(N_PSIZE),
					'height:' + px(N_PSIZE),
					'margin-left:' + px(-0.5 * N_PSIZE),
					'margin-top:' + px(-0.5 * N_PSIZE),
					'font-size:' + px(10),
					'white-space:pre'
				].join(';')]
			],
			e: [
				['mousedown', function (event) {
					var p = this;
					var listeners = addEventListener(window, 'mousemove', function (event) {
						movePoint(p, decodeX(event.clientX), decodeY(event.clientY));
						render();
					});
					updateEnvironment();
					addEventListener(window, 'mouseup', function () {
						removeEventListener(listeners);
					});
					preventDefault(event);
				}]
			]
		};
		var p1 = createElement(O_Point);
		var p2 = createElement(O_Point);
		var N_SIZE = 400;
		var container = appendChild(body, createElement({
			a: [
				['style', [
					'position:fixed',
					'left:0',
					'right:0',
					'top:0',
					'bottom:0'
				].join(';')]
			],
			c: [preview, canvas, p1, p2]
		}));
		updateEnvironment();
		movePoint(p1, 0.25, 0);
		movePoint(p2, 0.5, 1);
		render();
		requestAnimationFrame(function (animationStarttime) {
			var ctx = getContext(preview);
			var PI2 = Math.PI * 2;
			var PIoffset = PI2 / -4;
			var times = {};
			var onChangeTime = function () {
				times.total = times.duration + times.pause * 2;
			};
			var generateNumberInput = function (name, value, right) {
				var input = appendChild(container, createElement({
					t: 'input',
					a: [
						['type', 'number'],
						['min', '100'],
						['step', '100'],
						['style', [
							'position:absolute',
							'font-size:16px',
							'text-align:right',
							'width:80px',
							'bottom:10px',
							'right:' + px(right)
						].join(';')]
					],
					e: [
						['change', function () {
							times[name] = parseInt(input.value, 10);
							onChangeTime();
						}]
					]
				}));
				input.value = times[name] = value;
				onChangeTime();
				return input;
			};
			var render = function (timeStamp) {
				var t = (timeStamp - animationStarttime) % times.total;
				var phase = Math.floor((timeStamp - animationStarttime) / times.total);
				var xPos;
				var s;
				if (t < times.pause) {
					xPos = 0;
				} else if (times.total - times.pause < t) {
					xPos = 1;
				} else {
					xPos = (t - times.pause) / times.duration;
				}
				s = cubicBezier(p1.x, p1.y, p2.x, p2.y, xPos);
				ctx.fillStyle = 'rgba(255,0,0,1)';
				ctx.clearRect(0, 0, preview.width, preview.height);
				ctx.beginPath();
				ctx.arc(x(xPos), y(s), N_PSIZE, 0, PI2, 1);
				ctx.fill();
				ctx.beginPath();
				ctx.fillStyle = 'rgba(255,0,0,0.2)';
				switch (phase % 4) {
					case 0:
						ctx.rect(x(0), y(s), N_SIZE, N_SIZE * s);
						break;
					case 1:
						ctx.moveTo(x(0.5), y(0.5));
						ctx.arc(x(0.5), y(0.5), N_SIZE / 2, PIoffset + PI2 * s, PIoffset, 1);
						ctx.closePath();
						break;
					case 2:
						ctx.fillStyle = 'rgba(255,0,0,' + s.toFixed(2) + ')';
						ctx.rect(x(0), y(1), N_SIZE, N_SIZE);
						break;
					case 3:
						ctx.rect(x(0.5 - s / 2), y(0.5 + s / 2), N_SIZE * s, N_SIZE * s);
						break;
				}
				ctx.fill();
				requestAnimationFrame(render);
			};
			generateNumberInput('pause', 600, 10);
			generateNumberInput('duration', 1000, 100);
			render(animationStarttime);
		});
	}).catch(onError);
});
