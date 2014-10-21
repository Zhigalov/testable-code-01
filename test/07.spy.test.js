var Vow = require('vow'),
    sinon = require('sinon'),
    expect = require('chai').expect;

describe('Spy test', function () {
    it('callback with promise', function () {
        var cb = sinon.spy();
        return Vow.resolve('resolveData')
            .then(cb)
            .then(function () {
                expect(cb.calledOnce).to.be.true;

                var call = cb.firstCall;
                expect(call.calledWith('resolveData')).to.be.true;
                expect(call.args[0]).to.equal('resolveData');
            });

    });

    it('callback with promise and correct assert', function () {
        var cb = sinon.spy();
        return Vow.resolve('resolveData')
            .then(cb)
            .then(function () {
                sinon.assert.calledOnce(cb);
                sinon.assert.calledWithExactly(cb, 'resolveData');
                sinon.assert.calledWithMatch(cb, /^resolve.+$/)
            });

    });
});