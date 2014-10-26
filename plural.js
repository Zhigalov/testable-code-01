// NAME
// ----------------
// plural
//
// DESCRIPTION:
// ----------------
//
// Вывод слова в правильном падеже по числу.
//
// ARGUMENTS:
// ----------------
//
// 	`words` - массив с падежами
// 	`count` - число

var plural = function(words, count)
{
//
// Если длинна массива с падежами меньше требуемой длины.
//
    if (words.length != 3)
    {
        throw new Error('Error! Wrong array length!');
    }
//	
// Если отсутствует второй параметр (число).
//
    if (count === undefined)
    {
        throw new Error('Error! Wrong count value!');
    }
//
// Находим последнюю цифру.
//
    var lastDigit    = count % 10;
//
// Находим предпоследнюю цифру.
//
    var preLastDigit = (count / 10 | 0) % 10;
//
// Cлучай: \*1. Кроме *11.
//	
    if (lastDigit == 1 && preLastDigit != 1)
        return words[0];
    else
//
// Cлучай: \*2, \*3, \*4. Кроме \*12, \*13, \*14.
//	
        if (lastDigit > 1 && lastDigit < 5 && preLastDigit != 1)
            return words[1];
//
// Все остальные случаи.
//	
        else
            return words[2];

};

module.exports = plural;