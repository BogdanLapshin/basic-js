const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error();
    }
    let new_arr = [];
    debugger;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            if (i === arr.length - 1) {
                continue;
            };
            new_arr.push(null);
            i = i + 1;
            continue;
        } else if (arr[i] === '--discard-prev') {
            if (i === 0) {
                continue;
            }
            new_arr.pop();
            continue;
        } else if (arr[i] === '--double-next') {
            if (i === arr.length - 1) {
                continue;
            }
            new_arr.push(arr[i + 1]);
            continue;
        } else if (arr[i] === '--double-prev') {
            if (i === 0) {
                continue;
            }
            new_arr.push(new_arr[new_arr.length - 1]);
            continue;
        }
        new_arr.push(arr[i]);
    }

    function checkArr(item) {
        return item !== null;
    }
    return new_arr.filter(checkArr);
};