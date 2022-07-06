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
