var inflection = require('../inflection.js');
var expect = require('C:/Users/сп/node_modules/chai/').expect;
describe('Inflection cats test', function () {
    var words = ['котик', 'котика', 'котиков'];
    it ("1 cat", function() {
        expect(inflection(words, 1)).to.equal('котик');
     });
    it ("2 cats", function() {
        expect(inflection(words, 2)).to.equal('котика');
    });
    it ("5 cats", function() {
        expect(inflection(words, 5)).to.equal('котиков');
    });
    it ("10 cats", function() {
        expect(inflection(words, 10)).to.equal('котиков');
    });
    it ("11 cats", function() {
        expect(inflection(words, 11)).to.equal('котиков');
    });
    it ("18 cats", function() {
        expect(inflection(words, 18)).to.equal('котиков');
    });
    it ("100 cats", function() {
        expect(inflection(words, 100)).to.equal('котиков');
    });
    it ("123 cats", function() {
        expect(inflection(words, 123)).to.equal('котика');
    });
});

