const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    try {
        let new_arr = [];
        for (let i = 0; i < arr.length; i++) {
            try {
                let name = arr[i].trim();
                new_arr.push(name[0].toUpperCase());
            } catch (TypeError) {
                continue;
            }
        }

        return new_arr.sort().join("");
    } catch (TypeError) {
        return false;
    }
};