const CustomError = require("../extensions/custom-error");


module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counter = 1;
        arr.forEach((element) => {
            if (typeof element == "object") {
                counter = Math.max(this.calculateDepth(element) + 1, counter);
            }
        })
        return counter;
    }

}