const repeatString = function(string, num) {
    if (num < 0)
        return "ERROR";
    let result = ""
    for (let i = 0; i < num - 1; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
