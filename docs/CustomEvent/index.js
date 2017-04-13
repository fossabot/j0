(function(){
'use strict';

var Event = CustomEvent;
try {
	new Event('G');
} catch (error) {
	Event = null;
}
var CustomEvent$1 = Event;

describe('CustomEvent', function () {

	it('should be a constructor or null', function () {
		if (CustomEvent$1) {
			assert.doesNotThrow(function () {
				return new CustomEvent$1('G');
			});
		} else {
			assert.equal(CustomEvent$1, null);
		}
	});
});
}())
