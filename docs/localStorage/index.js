(function(){
'use strict';

var storage = void 0;
try {
	storage = localStorage;
	storage.is = 'available';
} catch (err) {
	storage = 0;
}
if (storage) {
	storage.removeItem('is');
} else {
	storage = {
		removeItem: function removeItem(key) {
			delete this[key];
		}
	};
}
var localStorage$1 = storage;

var key = Date.now();

describe('localStorage', function () {

	it('should be writable/readable', function () {
		localStorage$1[key] = key;
		assert.equal(localStorage$1[key], key);
	});

	it('should remove data', function () {
		localStorage$1.removeItem(key);
		assert.equal(localStorage$1[key], {}[key]);
	});
});
}())
