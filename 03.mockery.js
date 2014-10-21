var getTemperature = require('./getTemperature'),
    getRainfall = require('./getRainfall'),
    Vow = require('vow');

/**
 * Получении погодной иконки
 *
 * @return {String} название погодной иконки
 */
function getWeatherIcon() {
    // Запрашиваем температуру и осадки
    return Vow.all({
        temperature: getTemperature(),
        rainFall: getRainfall()
    })
        // Выбираем иконку на основани температуры и осадков
        .then(function (data) {
            if (!data.rainFall) {
                return 'sun';
            }

            return data.temperature > 0 ? 'rain' : 'snow';
        });
}

module.exports = getWeatherIcon;