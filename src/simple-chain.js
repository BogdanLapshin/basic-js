const CustomError = require("../extensions/custom-error");

let str = [];
const chainMaker = {
    getLength() {
        return str.length;
    },
    addLink(value) {
        if (typeof value == undefined) {
            str.push("()");
        } else {
            str.push(`( ${value} )`);
        }
        return this;

    },
    removeLink(position) {
        if (Number.isInteger(position) && position >= 1 && position <= str.length) {
            str.splice(position - 1, 1);
            return this;
        } else {
            str = [];
            throw Error();
        }
    },
    reverseChain() {
        str = str.reverse();
        return this;
    },
    finishChain() {
        let result = str;
        str = [];
        return result.join("~~")

    }
};


module.exports = chainMaker;