var sinon = require('sinon'),
    expect = require('chai').expect;

describe('Fake plural', function () {
    it('for `котики`', function () {
        var stub = sinon.stub(),
            cats = ['котик', 'котика', 'котиков'];

        stub.withArgs(cats, 1).returns('котик');
        stub.returns('котиков');

        expect(stub(cats, 1)).to.equal('котик');
        expect(stub(cats, 12)).to.equal('котиков');
    });
});