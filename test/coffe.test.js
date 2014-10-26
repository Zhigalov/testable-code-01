var plural = require('../plural');
var expect = require('chai').expect;

describe('Тесты с кофе (кофе, кофе, кофе).', function()
{
    var words = ['кофе', 'кофе', 'кофе'];

    it('1 кофе.', function()
    {
        var actual   = plural(words, 1);
        var expected = 'кофе';

        expect(actual).to.equal(expected);
    });

    it('5 кофе.', function()
    {
        var actual   = plural(words, 5);
        var expected = 'кофе';

        expect(actual).to.equal(expected);
    });

    it('10 кофе.', function()
    {
        var actual   = plural(words, 10);
        var expected = 'кофе';

        expect(actual).to.equal(expected);
    });

    it('100500 кофе.', function()
    {
        var actual   = plural(words, 100500);
        var expected = 'кофе';

        expect(actual).to.equal(expected);
    });
});