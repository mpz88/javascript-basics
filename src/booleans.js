function negate(a) {
  return !a;
};

function both(a, b) {
  return a&&b;
};

function either(a, b) {
  return a||b;
};

function none(a, b) {
return a===b&& a===false;
  };


function one(a, b) {
if (a===true) {
if (b===true) {
  return false
}else{return true}
  } else if (b === true) {
    return true;
  }else {return false}
};

function truthiness(a) {
  return !!a;
};

function isEqual(a, b) {
  return a===b;
};

function isGreaterThan(a, b) {
  return a>b;
};

function isLessThanOrEqualTo(a, b) {
  return a<=b;
};

function isOdd(a) {
     return Math.abs(a % 2) == 1;

};

function isEven(a) {
   return a % 2 == 0;
};

function isSquare(a) {
  if (a === Math.pow(2)) {
    return true;
  }
};

function startsWith(char, string) {
  
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
 if (string.toLowerCase()===string) {
  return true
  } else {
    return false;
  }
};
module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
