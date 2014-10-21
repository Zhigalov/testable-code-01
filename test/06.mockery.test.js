var mockery = require('mockery'),
    Vow = require('vow'),
    expect = require('chai').expect;

describe('Get weather icon', function () {
    var temperatureMock,
        rainfallMock,
        sut;

    before(function () {
        mockery.registerMock('./getTemperature', function () {
            return temperatureMock;
        });
        mockery.registerMock('./getRainfall', function () {
            return rainfallMock;
        });
        mockery.registerAllowable('../03.mockery');
        mockery.registerAllowable('vow');
        mockery.enable();
        sut = require('../03.mockery');
    });

    it('should return `sun` when rain is false', function () {
        temperatureMock = Vow.resolve(10);
        rainfallMock = Vow.resolve(false);

        return sut().then(function (actual) {
            expect(actual).to.equal('sun');
        });
    });

    it('should return `rain` when rain is true and positive degree', function () {
        temperatureMock = Vow.resolve(10);
        rainfallMock = Vow.resolve(true);

        return sut().then(function (actual) {
            expect(actual).to.equal('rain');
        });
    });

    it('should return `snow` when rain is true and negative degree', function () {
        temperatureMock = Vow.resolve(-10);
        rainfallMock = Vow.resolve(true);

        return sut().then(function (actual) {
            expect(actual).to.equal('snow');
        });
    });

    after(function () {
        mockery.disable();
    });
});