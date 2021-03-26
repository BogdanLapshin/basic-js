const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let new_str = "";
    let repeat_times;
    switch (options.repeatTimes) {
        case undefined:
            repeat_times = 1;
            break;
        default:
            repeat_times = options.repeatTimes;
            break;
    }
    let addition;
    switch (options.addition) {
        case undefined:
            addition = "";
            break;
        default:
            addition = String(options.addition);
            break;

    }

    let addrepeat_times;
    switch (options.additionRepeatTimes) {
        case undefined:
            addrepeat_times = 1;
            break;
        default:
            addrepeat_times = options.additionRepeatTimes;
            break;
    }

    let separ;
    switch (options.separator) {
        case undefined:
            separ = "+";
            break;
        default:
            separ = options.separator;
    }
    let add_separ;
    switch (options.additionSeparator) {
        case undefined:
            add_separ = "|";
            break;
        default:
            add_separ = options.additionSeparator;
            break;
    }


    for (let x = 0; x < repeat_times; x++) {
        let part_str = "";
        let separ2;

        for (let i = 0; i < addrepeat_times; i++) {
            let add_separ2;
            if (i == addrepeat_times - 1) {
                add_separ2 = "";
            } else {
                add_separ2 = add_separ;
            }
            part_str += addition + add_separ2;
        }

        if (x == repeat_times - 1) {
            separ2 = "";
        } else {
            separ2 = separ;
        }

        new_str += String(str) + part_str + separ2
    }
    return new_str;
};