// Returns last letter of a string
let returnLastLetter = function (inputString) {
  let stringLength = inputString.length;
  let lastLetter = inputString.slice(stringLength - 1);
  return lastLetter;
};

console.log(returnLastLetter(`Returns the last letter of a string`)); // g
