describe('http', function () {

	var assert = require('assert');
	var http = require('../lib/http');

	var randomText = function (size) {
		var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var length = characters.length;
		var result = '';
		var i;
		for (i = 0; i < size; i += 1) {
			result += i % 16 ? characters.charAt(Math.floor(length * Math.random())) : '\n';
		}
		return result;
	};

	it('GET text', function (done) {
		http({
			method: 'GET',
			url: 'http.txt'
		}).then(function (received) {
			assert.equal(received.replace(/^\s*|\s*$/g, ''), 'Babble');
			done();
		}).catch(done);
	});

	it('GET json', function (done) {
		http({
			method: 'GET',
			url: 'http.json'
		}).then(function (received) {
			assert.deepEqual(received, {
				name: 'Attackbot',
				HP: 169,
				MP: 0,
				ATK: 185,
				DEF: 185,
				AGI: 98,
				GP: 74,
				EXP: 700
			});
			done();
		}).catch(done);
	});

	it('progress', function (done) {
		var data = randomText(100);
		var progress = 0;
		http({
			method: 'POST',
			url: '/http-test',
			data: data,
			headers: {
				'Content-Type': 'text/plain'
			},
			onProgress: function (event) {
				progress = event.loaded / event.total;
			}
		}).then(function () {
			assert.equal(progress, 1);
			done();
		}).catch(done);
	});

	it('upload progress', function (done) {
		var data = randomText(100);
		var progress = 0;
		http({
			method: 'POST',
			url: '/http-test',
			data: data,
			headers: {
				'Content-Type': 'text/plain'
			},
			onUploadProgress: function (event) {
				progress = event.loaded / event.total;
			}
		}).then(function () {
			assert.equal(progress, 1);
			done();
		}).catch(done);
	});

	it('PUT', function (done) {
		var data = randomText(100);
		http({
			method: 'PUT',
			url: '/http-test',
			data: data
		}).then(function (received) {
			assert.equal(received, data);
			done();
		}).catch(done);
	});

	it('PATCH', function (done) {
		var data = randomText(100);
		http({
			method: 'PATCH',
			url: '/http-test',
			data: data
		}).then(function (received) {
			assert.equal(received, data);
			done();
		}).catch(done);
	});

	it('DELETE', function (done) {
		var data = randomText(100);
		http({
			method: 'DELETE',
			url: '/http-test',
			data: data
		}).then(function (received) {
			assert.equal(received, data);
			done();
		}).catch(done);
	});

});
