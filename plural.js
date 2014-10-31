/**
 *
 *	Склонение слова
 *
 *@param {array}
 *
 */
module.exports = function (array, number) {
    if (number % 100 > 9 && number % 100 < 21) {
        return(array[2]);
    } else if (number % 10 == 1) {
        return(array[0]);
    } else if (number % 10 > 1 && number % 10 < 5) {
        return(array[1]);
    } else {
        return(array[2]);
    }
}

