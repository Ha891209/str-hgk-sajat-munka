const increaseDate = (date, day = 3) => date.getTime() + 3 * 86400 * 1000
const increaseAndFormatDate = date => date.map(item => new Intl.DateTimeFormat('hu-HU').format(item.getTime() + 3 * 86400 * 1000))
module.exports = Object.freeze({
    increaseAndFormatDate
})