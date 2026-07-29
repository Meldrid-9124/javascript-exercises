const fibonacci = function(num) {
    // handle the case of negatives
    if (num < 0)
        return "OOPS";
    // start with 0 and 1
    let sequence = [0, 1];
    for (let i = 0; i < num; i++) {
        const lastIndex = sequence.length - 1;
        // insert the sum of current last and second last elements of the sequence
        sequence.push(sequence[lastIndex] + sequence[lastIndex - 1]);
    }
    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;