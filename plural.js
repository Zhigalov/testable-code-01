/**
 * Generates plural form
 * @param {Array} words
 * @param {Number} num
 *
 */

var plural = function(words, num) {
	if (words.length != 3) {
		throw new Error('Wrong words array');
	}
	var lastNum = num % 10;
	var second = (num / 10) % 10;
	if (second == 1)
		return words[2]
	else if (lastNum == 1)
		return words[0];
	else if (lastNum <= 4)
		return words[1];
	else
		return words[2];
};

module.exports = plural;