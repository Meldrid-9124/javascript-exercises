const convertToCelsius = function (temp) {
  return +((temp - 32) * 5 / 9.0).toFixed(1)
};

const convertToFahrenheit = function (temp) {
  return +(temp * 9 / 5.0 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
