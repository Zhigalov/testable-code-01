var expect = require('chai').expect,
    RedButton = require('../redButton');

describe('Red button', function () {
    var redButton;

    beforeEach(function () {
        redButton = new RedButton();
    });

    it('should be switch off when never pressed', function () {
        expect(redButton.getState()).to.equal('off');
    });

    it('should be switch on when pressed once', function () {
        redButton.press();
        expect(redButton.getState()).to.equal('on');
    });

    it('should be switch off when pressed twice', function () {
        redButton.press();
        redButton.press();
        expect(redButton.getState()).to.equal('off');
    });
//
//    it('should be switch on when pressed third', function () {
//        redButton.press();
//        redButton.press();
//        redButton.press();
//        expect(redButton.getState()).to.equal('on');
//    });
});
