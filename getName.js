module.exports = function (date) {
    return date > new Date() ? 'future' : 'past';
};