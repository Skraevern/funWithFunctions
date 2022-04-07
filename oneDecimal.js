// Returns number with one decimal

let oneDecimal = function (number) {
  let rounded = Math.round(number * 10) / 10;
  return rounded;
};
console.log(oneDecimal(2.113)); // 2,1

//

let exampleNumber = 21.32124;
let roundedExampleNumber = Math.round(exampleNumber * 10) / 10;
console.log(roundedExampleNumber); // 21,3
