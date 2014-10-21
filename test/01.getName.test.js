var getName = require('../getName');

describe('Get name', function () {
    it('should return `past` when date in past', function () {
        var date = new Date(2014, 9, 6, 12, 0, 0),
            dayName = getName(date);

        console.log(dayName);
    });
})