var request = require('supertest'),
    app = require('../02.ping');

describe('Supertest', function () {
    it('should success ping', function (done) {
        request(app)
            .get('/ping')
            .expect(200)
            .expect('pong')
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });
});