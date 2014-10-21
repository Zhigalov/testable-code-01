describe('Call done', function () {
    it('should passed', function (done) {
        setTimeout(function () {
            // do something
            done();
        }, 0)
    });

    it('should failed', function (done) {
        setTimeout(function () {
            // do something
            done('Error text');
        }, 0)
    });
});