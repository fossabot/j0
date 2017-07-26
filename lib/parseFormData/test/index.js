import parse from '../index.js';

describe('parseFormData', function () {

	it('should parse string', function () {
		const form = parse('a=b&c=d', {
			data: {},
			append: function (key, value) {
				this.data[key] = value;
			}
		});
		assert.deepEqual(form.data, {
			a: 'b',
			c: 'd'
		});
	});

});
