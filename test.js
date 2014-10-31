var plu = require('./plural'),
    expect = require('chai').expect;

describe('plural', function () {
    it('should return first', function () {
            actual = plu(["k", "ka", "kov"], 21),
            expected = "k";

        expect(actual).to.equal(expected);
    });

    it('should return second', function () {
            actual = plu(["k", "ka", "kov"], 2),
            expected = "ka";

        expect(actual).to.equal(expected);
    });

    it('should return other', function () {
            actual = plu(["k", "ka", "kov"], 11),
            expected = "kov";

        expect(actual).to.equal(expected);
    });


});
