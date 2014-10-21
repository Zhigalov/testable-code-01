var Vow = require('vow');

module.exports = function (isResolve) {
    var defer = new Vow.defer();

    if (isResolve) {
        defer.resolve('Boolean is true');
    } else {
        defer.reject('Boolean is false');
    }

    return defer.promise();
};