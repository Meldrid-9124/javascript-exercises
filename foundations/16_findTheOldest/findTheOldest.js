const findTheOldest = function (people) {
    // check the yearOfDeath for first person
    let firstPerson = people[0];
    if (firstPerson.yearOfDeath === undefined)
        firstPerson.yearOfDeath = new Date().getFullYear();
    const array = people.reduce((accumulated, current) => {
        // the person at the last index represents the oldest person
        // if current last index is not older than current, push current to end
        const lastIndex = accumulated.length - 1;
        let currentDeathYear = current.yearOfDeath;
        if (currentDeathYear === undefined)
            currentDeathYear = new Date().getFullYear();
        if (currentDeathYear - current.yearOfBirth > accumulated[lastIndex].yearOfDeath - accumulated[lastIndex].yearOfBirth)
            accumulated.push(current);
        return accumulated;
    }, [firstPerson])
    // return the oldest person
    return array[array.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;