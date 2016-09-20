describe('forEach', function () {

	var assert = require('assert');
	var forEach = require('../lib/forEach');

	it('should call fn with every item in the array', function () {
		var results = [];
		forEach([
			'Army Ant',
			'Atlas',
			'Attackbot',
			'Babble',
			'Baboon'
		], function (item, index) {
			results.push(index + '-' + item);
		});
		assert.deepEqual(results, [
			'0-Army Ant',
			'1-Atlas',
			'2-Attackbot',
			'3-Babble',
			'4-Baboon'
		]);
	});

	it('should call fn with every item in the iterable', function () {
		var results = [];
		forEach({
			0: 'Basilisk',
			1: 'Bazuzu',
			2: 'Berserker',
			3: 'Big Cobra',
			4: 'Big Rat',
			length: 5
		}, function (item, index) {
			results.push(index + '-' + item);
		});
		assert.deepEqual(results, [
			'0-Basilisk', '1-Bazuzu', '2-Berserker', '3-Big Cobra', '4-Big Rat'
		]);
	});

	it('should break the iteration if the function returns something truthy', function () {
		var results = [];
		forEach([
			'Big Slug',
			'Blizzard',
			'Bullwong',
			'Carnivog',
			'Centipod'
		], function (item, index) {
			results.push(index + '-' + item);
			return index === 2;
		});
		assert.deepEqual(results, [
			'0-Big Slug',
			'1-Blizzard',
			'2-Bullwong'
		]);
	});

});
