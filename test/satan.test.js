var expect = require('chai').expect,
    plural = require('../plural');

describe('Satan test', function() {
    var satans = ["сатана", "сатаны", "сатан"];

    it('should be `1 сатана`', function() {
        expect(plural(satans, 1)).to.equal('сатана');
    });

    it('should be `2 сатаны`', function() {
        expect(plural(satans, 2)).to.equal('сатаны');
    });

    it('should be `21 сатана`', function() {
        expect(plural(satans, 21)).to.equal('сатана');
    });

    it('should be `2033 сатаны`', function() {
        expect(plural(satans, 2033)).to.equal('сатаны');
    });

    it('should be `100500 сатан`', function() {
        expect(plural(satans, 100500)).to.equal('сатан');
    });
});
