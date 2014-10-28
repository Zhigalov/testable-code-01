var inflection = function (words, number) {
    var lastNumber = number % 10;
    var secondLastNumber =parseInt(number / 10) % 10;
    if (secondLastNumber == 1) {
        return words[2];
    }
    if (lastNumber == 1) {
        return words[0];
    }
    if (lastNumber > 1 && lastNumber < 5) {
        return words[1];
    }
    return words[2];


};

module.exports = inflection;