const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    const numSample = Number.parseFloat(sampleActivity);
    if (typeof sampleActivity !== 'string' || numSample <= 0 || numSample > MODERN_ACTIVITY || isNaN(numSample)) {
        return false;
    }
    const digit = MODERN_ACTIVITY / numSample;
    const k = Math.log(2) / HALF_LIFE_PERIOD;
    const t = Math.log(digit) / k;
    return Math.ceil(t);
};