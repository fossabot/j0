/* eslint no-magic-numbers: "off" */
import {
	clamp,
	Math
} from 'j0';
function thermalRGB(value) {
	const ratio = value * 2;
	const b = clamp(1 - ratio, 0, 1);
	const r = clamp(ratio - 1, 0, 1);
	const g = clamp(0.8 - b - r, 0, 1);
	return [r, g, b];
}
function css(value) {
	return `rgb(${
		thermalRGB(value).map(function (v) {
			return Math.floor(clamp(256 * v, 0, 255));
		})
		.join(',')
	})`;
}
thermalRGB.css = css;
export default thermalRGB;
