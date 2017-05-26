(function(){
'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function trim(string) {
	return string.trim();
}

var x = decodeURIComponent;

var x$1 = FormData;

function parse(body) {
	var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new x$1();

	trim(body).split('&').forEach(function (data) {
		if (data) {
			var _data$split = data.split('='),
			    _data$split2 = _toArray(_data$split),
			    name = _data$split2[0],
			    parts = _data$split2.slice(1);

			name = x(name.replace(/\+/g, ' '));
			parts = x(parts.join('=').replace(/\+/g, ' '));
			form.append(name, parts);
		}
	});
	return form;
}

describe('FormData/parse', function () {

	it('should parse string', function () {
		var form = parse('a=b&c=d', {
			data: {},
			append: function append(key, value) {
				this.data[key] = value;
			}
		});
		assert.deepEqual(form.data, {
			a: 'b',
			c: 'd'
		});
	});
});
}())
