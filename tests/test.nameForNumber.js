var nameForNumber = require('../nameForNumber');
var expect = require('C:/Users/Василий/AppData/Roaming/npm/node_modules/chai').expect;

describe('nameForNumber', function () {
    it('should return котик for 1', function () {
		var actual = nameForNumber(["котик","котика","котиков"], 1);
		var expected = "котик";
		expect(actual).to.equal(expected);
    });
	
	it('should return котика for 22', function () {
		var actual = nameForNumber(["котик","котика","котиков"], 22);
		var expected = "котика";
		expect(actual).to.equal(expected);    
	});
	
	it('should return котиков for 35', function () {
		var actual = nameForNumber(["котик","котика","котиков"], 35);
		var expected = "котиков";
		expect(actual).to.equal(expected);    
	});
	
	it('should return котиков for 111', function () {
		var actual = nameForNumber(["котик","котика","котиков"], 111);
		var expected = "котиков";
		expect(actual).to.equal(expected);    
	});
	
	it('should return котиков for 112', function () {
		var actual = nameForNumber(["котик","котика","котиков"], 112);
		var expected = "котиков";
		expect(actual).to.equal(expected);    
	});

})