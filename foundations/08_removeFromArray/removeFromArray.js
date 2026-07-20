const removeFromArray = function (array, ...targets) {
    for (target of targets) {
        array = array.filter((element) => {
            return element !== target;
        })
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;