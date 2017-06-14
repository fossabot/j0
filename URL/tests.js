/* eslint-disable no-new, no-console, max-lines */

function decoder(key) {
	return (data) => {
		return decodeURIComponent(data[key]);
	};
}

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
			],
			[
				['http:foo.com', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/foo.com'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['\t   :foo.com   \n', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:foo.com'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[' foo.com  ', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/foo.com'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['a:\t foo.com', 'http://example.org/foo/bar'],
				[
					['protocol', 'a:'],
					['hostname', ''],
					['port', ''],
					['host', ''],
					[decoder('pathname'), ' foo.com'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://f:21/ b ? d # e ', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'f'],
					['port', '21'],
					['host', 'f:21'],
					['pathname', '/%20b%20'],
					['search', '?%20d%20'],
					['hash', '# e']
				]
			],
			[
				['http://f:/c', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'f'],
					['port', ''],
					['host', 'f'],
					['pathname', '/c'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://f:0/c', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'f'],
					['port', '0'],
					['host', 'f:0'],
					['pathname', '/c'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://f:00000000000000/c', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'f'],
					['port', '0'],
					['host', 'f:0'],
					['pathname', '/c'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://f:00000000000000000000080/c', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'f'],
					['port', ''],
					['host', 'f'],
					['pathname', '/c'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://f:b/c', 'http://example.org/foo/bar']
			],
			[
				['http://f: /c', 'http://example.org/foo/bar']
			],
			[
				['http://f:\n/c', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'f'],
					['port', ''],
					['host', 'f'],
					['pathname', '/c'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://f:fifty-two/c', 'http://example.org/foo/bar']
			],
			[
				['http://f:9999/c', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'f'],
					['port', '9999'],
					['host', 'f:9999'],
					['pathname', '/c'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://f: 21 / b ? d # e ', 'http://example.org/foo/bar']
			],
			[
				['', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/bar'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['  \t', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/bar'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[':foo.com/', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:foo.com/'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[':foo.com\\', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:foo.com/'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[':', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[':a', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:a'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[':/', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:/'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[':\\', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:/'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[':#', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:'],
					['search', ''],
					['hash', '']
					// ['hash', '#']
				]
			],
			[
				['#', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/bar'],
					['search', ''],
					['hash', '']
					// ['hash', '#']
				]
			],
			[
				['#/', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/bar'],
					['search', ''],
					['hash', '#/']
				]
			],
			[
				['#\\', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/bar'],
					['search', ''],
					['hash', '#\\']
				]
			],
			[
				['#;?', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/bar'],
					['search', ''],
					['hash', '#;?']
				]
			],
			[
				['?', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/bar'],
					// ['search', '?'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['/', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/'],
					['search', ''],
					['hash', '']
				]
			],
			[
				[':23', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:23'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['/:23', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/:23'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['::', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/::'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['::23', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/::23'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['foo://', 'http://example.org/foo/bar'],
				[
					['protocol', 'foo:'],
					['hostname', ''],
					['port', ''],
					['host', ''],
					['pathname', '//'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://a:b@c:29/d', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['username', 'a'],
					['password', 'b'],
					['hostname', 'c'],
					['port', '29'],
					['host', 'c:29'],
					['pathname', '/d'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http::@c:29', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['hostname', 'example.org'],
					['port', ''],
					['host', 'example.org'],
					['pathname', '/foo/:@c:29'],
					['search', ''],
					['hash', '']
				]
			],
			[
				['http://&a:foo(b]c@d:2/', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['username', '&a'],
					[decoder('password'), 'foo(b]c'],
					['hostname', 'd'],
					['port', '2'],
					['host', 'd:2'],
					['pathname', '/'],
					['search', ''],
					['hash', '']
				]
			],
			// [
			// 	['http://::@c@d:2', 'http://example.org/foo/bar'],
			// 	[
			// 		['protocol', 'http:'],
			// 		['username', ''],
			// 		[decoder('password'), ':@c'],
			// 		['hostname', 'd'],
			// 		['port', '2'],
			// 		['host', 'd:2'],
			// 		['pathname', '/'],
			// 		['search', ''],
			// 		['hash', '']
			// 	]
			// ],
			[
				['http://foo.com:b@d:2/', 'http://example.org/foo/bar'],
				[
					['protocol', 'http:'],
					['username', 'foo.com'],
					['password', 'b'],
					['hostname', 'd'],
					['port', '2'],
					['host', 'd:2'],
					['pathname', '/'],
					['search', ''],
					['hash', '']
				]
			]
		]
		.forEach(([input, tests], index) => {
			if (tests) {
				it(`#${index} should construct a new URL ${input}`, function () {
					const url = new URL(...input);
					tests
					.forEach(([key, expected]) => {
						const actual = typeof key === 'function' ? key(url) : url[key];
						assert.equal(actual, expected, `${input}:${key}`);
					});
				});
			} else {
				it(`#${index} should fail to construct a new URL ${input[0]}`, function () {
					let caught;
					try {
						new URL(...input);
					} catch (error) {
						caught = error;
					}
					if (!caught) {
						console.info(`#${index} An error is expected but not occurred`);
					}
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
