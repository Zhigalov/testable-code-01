var pluralize = function (words, num) {

    var end = num % 10;
    var second_from_the_end = Math.round(num / 10) % 10;

    if (end == 1 && second_from_the_end != 1) {
        return words[0];
    } else if (end > 1 && end < 5 && second_from_the_end != 1) {
        return words[1];
    } else {
        return words[2];
    }
//    1 котик
//    2 - 4 котика
//    5 - 20  котиков
//
//    21 котик
//    22 - 24 котика
//    25 - 30 котиков
}
//console.log(pluralize(['котик', 'котика', 'котиков'], 23));
module.exports = pluralize;