const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(bool) {
        switch (bool) {
            case true:
            case undefined:
                this.bool = true;
                break;
            case false:
                this.bool = false;
        }
    }
    encrypt(msg, key) {
        try {
            msg = msg.toLowerCase();
            key = key.toLowerCase();
            let new_msg = [];

            let new_str = "";
            let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            for (let z = 0; z < msg.length; z++) {
                if (arr.includes(msg[z])) {
                    new_msg.push(msg[z]);
                }
            }


            key = key.repeat(Math.ceil(new_msg.length / key.length)).split("").splice(0, new_msg.length, "").join("")
            for (let i = 0; i < new_msg.length; i++) {

                switch (arr[arr.indexOf(new_msg[i]) + arr.indexOf(key[i])]) {
                    case undefined:
                        new_str += arr[arr.indexOf(new_msg[i]) + arr.indexOf(key[i]) - 26];

                        break;
                    default:
                        new_str += arr[arr.indexOf(new_msg[i]) + arr.indexOf(key[i])];
                        break;

                }


            }

            msg = msg.split("");
            new_str = new_str.split("");
            for (let y = 0; y < msg.length; y++) {
                if (!arr.includes(msg[y])) {
                    new_str.splice(y, 0, msg[y]);
                }
            }

            switch (this.bool) {
                case true:

                    return new_str.join("").toUpperCase();
                case false:
                    return new_str.reverse().join("").toUpperCase();
            }
        } catch (TypeError) {
            throw new Error;
        }

    }

    decrypt(msg, key) {
        try {
            msg = msg.toLowerCase();
            key = key.toLowerCase();
            let new_msg = [];

            let new_str = "";
            let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            for (let z = 0; z < msg.length; z++) {
                if (arr.includes(msg[z])) {
                    new_msg.push(msg[z]);
                }
            }


            key = key.repeat(Math.ceil(new_msg.length / key.length)).split("").splice(0, new_msg.length, "").join("")
            for (let i = 0; i < new_msg.length; i++) {

                switch (arr[arr.indexOf(new_msg[i]) - arr.indexOf(key[i])]) {
                    case undefined:
                        new_str += arr[arr.indexOf(new_msg[i]) - arr.indexOf(key[i]) + 26];

                        break;
                    default:
                        new_str += arr[arr.indexOf(new_msg[i]) - arr.indexOf(key[i])];
                        break;

                }


            }

            msg = msg.split("");
            new_str = new_str.split("");
            for (let y = 0; y < msg.length; y++) {
                if (!arr.includes(msg[y])) {
                    new_str.splice(y, 0, msg[y]);
                }
            }

            switch (this.bool) {
                case true:
                    return new_str.join("").toUpperCase();
                case false:
                    return new_str.reverse().join("").toUpperCase();
            }
        } catch (TypeError) {
            throw new Error;
        }
    }

}
module.exports = VigenereCipheringMachine;