import {Date} from '..';
import leftpad from '../String/leftpad';

const century = 100;
const shortenedLength = 3;

const MonthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const DayNames = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

function format(src, template) {
	const date = new Date(src);
	if (0 < date) {
		const Y = date.getFullYear();
		const M = date.getMonth();
		const D = date.getDate();
		const d = date.getDay();
		const h = date.getHours();
		const m = date.getMinutes();
		return template
		.replace(/%YYYY/g, Y.toString())
		.replace(/%YY/g, leftpad(Y % century))
		.replace(/%MMMM/g, MonthNames[M])
		.replace(/%MMM/g, MonthNames[M].slice(0, shortenedLength))
		.replace(/%MM/g, leftpad(M + 1))
		.replace(/%M/g, (M + 1).toString())
		.replace(/%DD/g, leftpad(D))
		.replace(/%D/g, D.toString())
		.replace(/%dddd/g, DayNames[d])
		.replace(/%ddd/g, DayNames[d].slice(0, shortenedLength))
		.replace(/%hh/, leftpad(h))
		.replace(/%h/, h.toString())
		.replace(/%mm/, leftpad(m))
		.replace(/%m/, m.toString());
	}
	return '';
}

export default format;
