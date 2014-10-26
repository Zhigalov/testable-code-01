module.exports = function(words, num) {
    var last = num % 10;
    var secondLast = parseInt(num / 10) % 10;
    if (last == 1 && secondLast != 1) {
        return words[0];
    }
    else if (last != 1 && last < 5 && secondLast != 1) {
        return words[1];
    }
    else {
        return words[2]
    }
};

