const getTheTitles = function (books) {
    return books.reduce((acc, current) => acc.concat(current.title), [])
}

// Do not edit below this line
module.exports = getTheTitles;  