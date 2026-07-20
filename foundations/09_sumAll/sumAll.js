const sumAll = function(num1, num2) {
    // validating the inputs
    // check if they are numbers or not
    if (Number.isNaN(num1) || Number.isNaN(num2))
        return "ERROR"
    // negative inputs
    else if (num1 < 0 || num2 < 0)
        return "ERROR"
    // checking if decimal or not
    else if (Math.floor(num1) !== num1 || Math.floor(num2) !== num2)
        return "ERROR"
    // fixing the order
    else if (num1 > num2) {
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
