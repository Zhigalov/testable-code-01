var plural = require('../plural');
var expect = require('chai').expect;


describe('Tests', function() {
    it('1 котик', function() {
        expect(plural(['котик','котика','котиков'],1)).to.equal('котик');
    });

    it('22 котика', function() {
        expect(plural(['котик','котика','котиков'],22)).to.equal('котика');
    });

    it('13 котиков', function() {
        expect(plural(['котик','котика','котиков'],13)).to.equal('котиков');
    });

    it('111 котиков', function() {
        expect(plural(['котик','котика','котиков'],111)).to.equal('котиков');
    });

    it('122 котика', function() {
        expect(plural(['котик','котика','котиков'],122)).to.equal('котика');
    });
});



