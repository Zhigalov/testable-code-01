describe('Common test', function () {
    ['first', 'second', 'third'].forEach(function (item) {
        it(item + ' test', function () {
            console.log(item);
        });
    });
});