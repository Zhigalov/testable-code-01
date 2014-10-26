var plural = require('../plural');
var expect = require('chai').expect;

describe('Тесты на Error\'ы.', function()
{

    it('Некорректная длина массива.', function()
    {
        var actual   = function()
        {
            plural(['раз', 'два'], 1);
        }

        expect(actual).to.throw(Error, 'Error! Wrong array length!');
    });

    it('Некорректная длина массива.', function()
    {
        var actual   = function()
        {
            plural(['раз', 'два', 'три']);
        }

        expect(actual).to.throw(Error, 'Error! Wrong count value!');
    });

});