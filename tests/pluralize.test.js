var pluralize = require('../pluralize');
var expect = require('chai').expect;

describe('pluralize', function () {
    var words = ['кот','кота','котов'];

    it('should return котик for 1', function () {
        var actual = pluralize(["котик", "котика", "котиков"], 1);
        expect(actual).to.equal("котик");
    });

    it('should return котик for 21', function () {
        var actual = pluralize(["котик", "котика", "котиков"], 21);
        expect(actual).to.equal("котик");
    });

    it('should return котика for 2', function () {
        var actual = pluralize(["котик", "котика", "котиков"], 2);
        expect(actual).to.equal("котика");
    });

    it('should return котика for 23', function () {
        var actual = pluralize(["котик","котика","котиков"], 23);
        expect(actual).to.equal("котика");
    });

    it('should return котиков for 100500', function () {
        var actual = pluralize(["котик", "котика", "котиков"], 100500);
        expect(actual).to.equal("котиков");
    });

    it('should return котиков for 11', function () {
        var actual = pluralize(["котик","котика","котиков"], 11);
        expect(actual).to.equal("котиков");
    });
});