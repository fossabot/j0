(function(){
'use strict';

function leftpad(x) {
	var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

	var s = x.toString();
	var pad = length - s.length;
	return 0 < pad ? '' + padChar.charAt(0).repeat(pad) + s : s;
}

var century = 100;
var shortenedLength = 3;

var MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var DayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function format(src, template) {
	var date = new Date(src);
	if (0 < date) {
		var Y = date.getFullYear();
		var M = date.getMonth();
		var D = date.getDate();
		var d = date.getDay();
		var h = date.getHours();
		var m = date.getMinutes();
		return template.replace(/%YYYY/g, Y.toString()).replace(/%YY/g, leftpad(Y % century)).replace(/%MMMM/g, MonthNames[M]).replace(/%MMM/g, MonthNames[M].slice(0, shortenedLength)).replace(/%MM/g, leftpad(M + 1)).replace(/%M/g, (M + 1).toString()).replace(/%DD/g, leftpad(D)).replace(/%D/g, D.toString()).replace(/%dddd/g, DayNames[d]).replace(/%ddd/g, DayNames[d].slice(0, shortenedLength)).replace(/%hh/, leftpad(h)).replace(/%h/, h.toString()).replace(/%mm/, leftpad(m)).replace(/%m/, m.toString());
	}
	return '';
}

describe('format', function () {

	it('should format a date', function () {
		var src = '2016-01-01T12:00Z';
		var template = '%YYYY%MMM';
		var expected = '2016Jan';
		assert.equal(format(src, template), expected);
	});
});
}())
