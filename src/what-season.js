const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date) {
        try {
            date.toJSON()
        } catch (e) {
            throw new Error(e)
        }
        let months = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter'];
        return months[date.getMonth()];
    } else {
        return 'Unable to determine the time of year!';
    }

};