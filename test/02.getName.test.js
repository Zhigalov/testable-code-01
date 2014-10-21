var getName = require('../getName'),
    expect = require('chai').expect;

describe('Get name', function () {
    it('should return `past` when date in past', function () {
        var date = new Date(2014, 9, 6, 12, 0, 0),
            actual = getName(date),
            expected = '!past';

        expect(actual).to.equal(expected);
    });

    it('should return `future` when date in future', function () {
        var date = new Date(2014, 9, 21, 22, 0, 0),
            actual = getName(date),
            expected = 'future';

        expect(actual).to.equal(expected);
    });
});
