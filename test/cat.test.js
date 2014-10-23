var expect = require('chai').expect;
var plural = require('../plural')

describe('Test with cats', function() {
	var words = ['кот','кота','котов'];	
	
	it('1 кот', function() {
		expect(plural(words,1)).to.equal('кот');	
	});
	
	it('2 кота', function() {
		expect(plural(words,2)).to.equal('кота');	
	});
	
	it('7 котов', function() {
		expect(plural(words,7)).to.equal('котов');	
	});
	
	it('10 котов', function() {
		expect(plural(words,10)).to.equal('котов');	
	});
	
	it('45 котов', function() {
		expect(plural(words,45)).to.equal('котов');	
	});
});

describe('Test with wrong array', function() {
	
	it('Must throw Error', function() {
		expect(function(){plural(['я','меня'])}).to.throw(Error);
	});
	
});