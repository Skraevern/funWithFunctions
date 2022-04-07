// Converts from fahrenheit to celsius with one decimal

const ftoc = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};
// works
console.log(ftoc(32)); // 0
// rounds to 1 decimal
console.log(ftoc(100)); // 37.8
// works with negatives
console.log(ftoc(-100)); // -73.3

//

// Converts from celsius to fahrenheit width one decimal
const ctof = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};
// works
console.log(ctof(0)); //32
// rounds to 1 decimal
console.log(ctof(73.2)); //163.8
// works with negatives
console.log(ctof(-10)); //14
