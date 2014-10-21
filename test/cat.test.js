var expect = require('chai').expect,
    plural = require('../plural');

describe('Cat test', function() {
    var cats = ["котик", "котика", "котиков"];

    it('should be `1 котик`', function() {
        expect(plural(cats, 1)).to.equal('котик');
    });

    it('should be `2 котика`', function() {
        expect(plural(cats, 2)).to.equal('котика');
    });

    it('should be `21 котик`', function() {
        expect(plural(cats, 21)).to.equal('котик');
    });

    it('should be `100500 котиков`', function() {
        expect(plural(cats, 100500)).to.equal('котиков');
    });
});
