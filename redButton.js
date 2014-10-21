function RedButton(state) {
    this._state = state || 'off';
}

RedButton.prototype.getState = function () {
    return this._state;
};

RedButton.prototype.press = function () {
    this._state = this._state === 'off' ? 'on' : 'off';
};

module.exports = RedButton;