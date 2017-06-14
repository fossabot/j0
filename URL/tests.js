function test(URL, name = 'URL') {

	describe(name, function () {

		[
			[
				['http://example\t.\norg', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['host', 'example.org'],
					['hostname', 'example.org'],
					['pathname', '/']
				]
			],
			[
				['http://user:pass@foo:21/bar;par?b#c', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'foo'],
					['port', '21'],
					['host', 'foo:21'],
					['pathname', '/bar;par'],
					['search', '?b'],
					['hash', '#c']
				]
			]
		]
		.forEach(([input, tests], index) => {
			if (tests) {
				it(`should construct a new URL #${index} ${input}`, function () {
					const url = new URL(...input);
					tests
					.forEach(([key, expected]) => {
						assert.equal(url[key], expected, `${input}:${key}`);
					});
				});
			} else {
				it(`should fail to construct a new URL #${index} ${input}`, function () {
					assert.throws(() => {
						return new URL(...input);
					});
				});
			}
		});

		it('should have createObjectURL', function () {
			assert.equal(typeof URL.createObjectURL, 'function');
		});

		it('should have revokeObjectURL', function () {
			assert.equal(typeof URL.revokeObjectURL, 'function');
		});

	});

}

export default test;
