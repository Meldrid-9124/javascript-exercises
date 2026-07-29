const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => (total * num));
};

const power = function(num, power) {
  let result = 1;
  for (let i = 0; i < power; i++)
    result *= num;
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i > 1; i--)
    result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
