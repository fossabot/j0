import {
	Date
} from 'j0';

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

function format(src, template, utc) {
	const date = new Date(src);
	if (0 < date) {
		const methodPrefix = `get${utc ? 'UTC' : ''}`;
		const Y = date[`${methodPrefix}FullYear`]();
		const M = date[`${methodPrefix}Month`]();
		const D = date[`${methodPrefix}Date`]();
		const d = date[`${methodPrefix}Day`]();
		const h = date[`${methodPrefix}Hours`]();
		const m = date[`${methodPrefix}Minutes`]();
		const s = date[`${methodPrefix}Seconds`]();
		return template
		.replace(/%(Y+|M+|D+|d+|h+|m+|s+)/g, function (match, type) {
			switch (type) {
			case 'YYYY':
				return `${Y}`;
			case 'YY':
				return `${Y % century}`.padStart(2, '0');
			case 'MMMM':
				return MonthNames[M];
			case 'MMM':
				return MonthNames[M].slice(0, shortenedLength);
			case 'MM':
				return `${M + 1}`.padStart(2, '0');
			case 'M':
				return `${M + 1}`;
			case 'DD':
				return `${D}`.padStart(2, '0');
			case 'D':
				return `${D}`;
			case 'dddd':
				return DayNames[d];
			case 'ddd':
				return DayNames[d].slice(0, shortenedLength);
			case 'hh':
				return `${h}`.padStart(2, '0');
			case 'h':
				return `${h}`;
			case 'mm':
				return `${m}`.padStart(2, '0');
			case 'm':
				return `${m}`;
			case 'ss':
				return `${s}`.padStart(2, '0');
			case 's':
				return `${s}`;
			}
			return match;
		});
	}
	return '';
}

export default format;
