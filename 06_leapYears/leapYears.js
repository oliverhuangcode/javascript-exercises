const leapYears = function(year) {
  // Check divisible by 4 and if divisible by 100 must be divisible by 400 to be true
  
  return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
