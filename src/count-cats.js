const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {

    let counter = 0;
    for (let x = 0; x < arr.length; x++) {
        for (let i = 0; i < arr[x].length; i++) {
            if (arr[x][i] == '^^') {
                counter++;
            }
        }
    }
    return counter;
};