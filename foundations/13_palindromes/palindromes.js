const palindromes = function (testString) {
    // get the array of all letters
    const charArray = Array.from(testString.toLowerCase());
    // get the array of alphabets
    const letters = charArray.filter((element) => {
        const code = element.charCodeAt(0);
        return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
    })
    // form a string from the array with no spacing 
    const result = letters.join("");
    // form the reverse array
    const reversed = letters.reverse().join("");
    // check if it is the same as its reverse
    if (result === reversed)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;