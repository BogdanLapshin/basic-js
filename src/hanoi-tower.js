const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let minutes = turnsSpeed / 3600;
    let dn = (2 ** disksNumber) - 1;
    let obj = {
        turns: dn,
        seconds: Math.floor(dn / minutes)
    }
    return obj;
};