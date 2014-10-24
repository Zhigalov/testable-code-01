function plural(words, number){
	if ((number >= 5) & (number <= 20))
		return words[2];
	var last = number % 10;
	number /= 10;
	var last_last = number % 10;
	if (last == 1)
		return words[0];
	if ((last_last != 0) & ((last == 0) || last >= 5))
		return words[2];
	if ((last_last != 0) & (last < 5))
		return words[1];
	else
		return words[2];
}

//words = ['котик', 'котика', 'котиков']
//number = process.argv[2]
exports.plural_cats = plural;
//console.log(plural(words, number))
//console.log(number)