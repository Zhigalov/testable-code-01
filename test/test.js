//var assert = require('../node_modules/chai').assert;	// Local Path

var assert = require('chai').assert; // For git

var Cats = require('../main');

words = ['котик', 'котика', 'котиков'];

describe('Cats.plural_cats', function () {
    it('must return котик for 1', function () {
		var actual = Cats.plural_cats(words, 1);
		var value = "котик";
		assert.equal(value, actual);
    });
	
	it('must return котика for 22', function () {
		var actual = Cats.plural_cats(words, 22);
		var value = "котика";
		assert.equal(value, actual);  
	});
	
	it('must return котиков for 35', function () {
		var actual = Cats.plural_cats(words, 35);
		var value = "котиков";
		assert.equal(value, actual);   
	});
	
	it('must return котиков for 111', function () {
		var actual = Cats.plural_cats(words, 111);
		var value = "котик";
		assert.equal(value, actual);   
	});
	
	it('must return котиков for 100500', function () {
		var actual = Cats.plural_cats(words, 100500);
		var value = "котиков";
		assert.equal(value, actual);    
	});

	it('must return котик for 100501', function () {
		var actual = Cats.plural_cats(words, 100501);
		var value = "котик";
		assert.equal(value, actual);    
	});

	it('must return котика for 100502', function () {
		var actual = Cats.plural_cats(words, 100502);
		var value = "котика";
		assert.equal(value, actual);    
	});

})