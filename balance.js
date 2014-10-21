/**
 * Баланс обеденной карточки яндексоида.
 *
 * @class Balance
 * @constructor
 */
function Balance() {
}

/**
 *  Получение информации о балансе яндексоида:
 *      1. текущего состояния счета
 *      2. остатка на конец месяца при текущем уровне расходов
 *
 * @method get
 */
Balance.prototype.get = function () {
    // TODO: implementation
};

/**
 * Получение информации о балансе яндексоида
 *
 * @protected
 * @method
 */
Balance.prototype._fetch = function () {
    // TODO: implementation
};

/**
 * Вычисление остатка на конец месяца при текущем уровне расходов
 *
 * @param {Number} balance баланс яндексоида
 * @protected
 * @method
 */
Balance.prototype._getRemainder = function (balance) {
    // TODO: implementation
};

module.exports = Balance;