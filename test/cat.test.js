var plural = require('../plural');
var expect = require('chai').expect;

describe('Тесты с котами (кот, кота, котов).', function()
{
    var words = ['кот', 'кота', 'котов'];

    it('1 кот.', function()
    {
        var actual   = plural(words, 1);
        var expected = 'кот';

        expect(actual).to.equal(expected);
    });

    it('2 кота.', function()
    {
        var actual   = plural(words, 2);
        var expected = 'кота';

        expect(actual).to.equal(expected);
    });

    it('7 котов.', function()
    {
        var actual   = plural(words, 7);
        var expected = 'котов';

        expect(actual).to.equal(expected);
    });

    it('11 котов.', function()
    {
        var actual   = plural(words, 11);
        var expected = 'котов';

        expect(actual).to.equal(expected);
    });
});
