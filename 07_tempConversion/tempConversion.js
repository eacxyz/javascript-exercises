const convertToCelsius = function(fahrenheit) {
  let ans = (fahrenheit - 32) * 5 / 9;
  return Number(ans.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let ans = celsius * 9 / 5 + 32;
  return Number(ans.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
