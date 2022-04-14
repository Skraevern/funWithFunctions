"use strict";

// Returns first letter inn string as capitalized
let capitalize = function (inputString) {
  let firstLetter = inputString.substring(1, -9999);
  let firstLetterCapitalize = firstLetter.toUpperCase();
  let remainingString = inputString.slice(1);
  let lowerCaseRemaining = remainingString.toLowerCase();
  return `${firstLetterCapitalize}${lowerCaseRemaining}`;
};

console.log(capitalize(`oNly FirSt LetteR is CapAiTalized`)); // Only first letter is capitalized

//

// Returns last letter of a string
let returnLastLetter = function (inputString) {
  let stringLength = inputString.length;
  let lastLetter = inputString.slice(stringLength - 1);
  return lastLetter;
};

console.log(returnLastLetter(`Returns the last letter of a string`)); // g

//

// Check if a string contains special characters.
let containsSpecialCharacters = function (str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
};
console.log(containsSpecialCharacters("test")); //false
console.log(containsSpecialCharacters("test/")); //True

//

// Returns longest word in a string. Will not log words with special characters.
let returnLongestWord = function (str) {
  let wordsArray = str.split(" ");
  let longestWord = `a`;
  for (let i = 0; i < wordsArray.length; i++) {
    let element = wordsArray[i];
    if (containsSpecialCharacters(element) === false) {
      if (element.length === longestWord.length) {
        longestWord = `${longestWord} ${element}`;
      } else if (element.length > longestWord.length) {
        longestWord = element;
      }
    }
  }
  return longestWord;
};

console.log(
  returnLongestWord(
    `Logs longest word but will not log words with wierd&/) symbols`
  )
); // longest symbols

//

// Repeat string function
const repeatString = function (str, num) {
  let string = str;
  let number = num;

  if (number === 0) {
    string = ``;
    return string;
  } else if (number < 0) {
    string = `ERROR`;
    return string;
  } else {
    for (let index = 1; index < num; index++) {
      string = string + str;
    }
  }
  return string;
};

console.log(repeatString(`hey`, 3)); //heyheyhey

//

// Reverse string
const reverseString = function (str) {
  let strArray = [];
  for (let i = 0; i < str.length; i++) {
    strArray.push(str[i]);
  }
  strArray.reverse();
  let stringReverse = strArray.join("");

  return stringReverse;
};

console.log(reverseString(`hello`)); // olleh

//

// Remove from array
const removeFromArray = function (arr, rem) {
  let newArray = [];

  for (let index = 0; index < arr.length; index++) {
    newArray.push(arr[index]);
    if (arr[index] === rem) {
      newArray.pop(arr[index]);
    }
  }
  return newArray;
};
console.log(removeFromArray([1, 2, 3, 4], 2)); // [1, 2, 4]

//

// Remove multiple arguments from array
const removeMultipleArgumentsFromArray = function (arr, ...theArgs) {
  let newArray = [];
  let element;

  for (let index = 0; index < arr.length; index++) {
    newArray.push(arr[index]);
    for (let i = 0; i < theArgs.length; i++) {
      element = theArgs[i];
      if (arr[index] === element) {
        newArray.pop(arr[index]);
      }
    }
  }
  return newArray;
};

console.log(removeMultipleArgumentsFromArray(["hey", 2, 3, "ho"], "hey", 3));
// [2, "ho"]

//

// Sum all numbers ex (1, 4) = 1 + 2 + 3 + 4 = 10
const sumAll = function (first, last) {
  let firstNumber = first;
  let lastNumber = last;
  let total = 0;
  console.log(typeof lastNumber);

  if (firstNumber > lastNumber) {
    firstNumber = last;
    lastNumber = first;
  }

  if (firstNumber < 0 || lastNumber < 0) {
    return `ERROR`;
  }

  if (typeof firstNumber !== `number` || typeof lastNumber !== `number`) {
    return `ERROR Nan`;
  }

  for (let i = firstNumber; i < lastNumber + 1; i++) {
    total = total + i;
  }

  return total;
};

console.log(sumAll(2, 72));

//

// sum of all numbers square. [2, 2, 3] = 2*2 + 2*2 + 3*3 = 17

let squareSum = function (...theArgs) {
  let argumentArray = theArgs;
  let total = 0;

  for (let i = 0; i < argumentArray.length; i++) {
    let element = argumentArray[i];
    total += element * element;
  }
  return total;
};

console.log(squareSum(1, 2, 2, 8)); // 73

//

// check if input year is a leap year

const leapYears = function (year) {
  if (Number.isInteger(year / 4) && Number.isInteger(year / 100) === false) {
    return true;
  } else if (Number.isInteger(year / 100) && Number.isInteger(year / 400)) {
    return true;
  } else {
    return false;
  }
};

// "works with non century years",
console.log(leapYears(1996)); // (true);

// "works with non century years"
console.log(leapYears(1997)); // (false);

// "works with ridiculously futuristic non century years"
console.log(leapYears(34992)); // true;

// "works with century years",
console.log(leapYears(1900)); // false

// "works with century years",
console.log(leapYears(1600)); // true

// "works with century years"
console.log(leapYears(700)); // false

/*
Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
*/

const ftoc = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

const ctof = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

console.log(ftoc(29));
console.log(ctof());

/*
Given an array of integers.
Return an array, where the first element is the count of positives 
numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/
function countPositivesSumNegatives(input) {
  let countPositives = 0;
  let sumNegatives = 0;
  let array = [countPositives, sumNegatives];

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      sumNegatives += input[i];
    } else if (input[i] > 0) {
      countPositives++;
    }
  }
  if (array[0] === 0 && array[1] === 0) {
    array.pop(array[0]);
    array.pop(array[0]);
  }
  return array;
}

console.log(countPositivesSumNegatives([0, 0]));

//

// change image every 1 second after player picks function
let delay = function (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};
// call delay function
let callDelayFunction = function () {
  delay(2000).then(() => console.log(`Delayed 2 seconds`));
};
// event listener for for button to log to console.
let delayBtn = document.getElementById(`delay-button`);
delayBtn.addEventListener(`click`, callDelayFunction);
