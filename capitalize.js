// Returns first letter inn string as capitalized
let capitalize = function (inputString) {
  let firstLetter = inputString.substring(1, -9999);
  let firstLetterCapitalize = firstLetter.toUpperCase();
  let remainingString = inputString.slice(1);
  let lowerCaseRemaining = remainingString.toLowerCase();
  return `${firstLetterCapitalize}${lowerCaseRemaining}`;
};

console.log(capitalize(`oNly FirSt LetteR is CapAiTalized`)); // Only first letter is capitalized
