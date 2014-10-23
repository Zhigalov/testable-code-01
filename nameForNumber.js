module.exports = function (names, number) {
	var last = number%10;
	var prelast = (parseInt(number/10))%10;
	if (last == 1 && prelast != 1)
		return names[0];
	else if (last>1 && last<5 && prelast != 1)
		return names[1];
	else
		return names[2];
};