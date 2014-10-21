var boolToPromise = require('../02.promise'),
    expect = require('chai').expect;

describe('Promise', function () {
    beforeEach(function () {
        return boolToPromise(true);
    });

    it('should passed', function () {
        return boolToPromise(true);
    });

    it('should failed', function () {
        return boolToPromise(false);
    });

    it('should expect fail case', function () {
        return boolToPromise(false)
            .then(function () {
                throw new Error('Test should fail');
            }, function (err) {
                expect(err).to.equal('Boolean is false');
            });

    });

    it('should be written in future')
});