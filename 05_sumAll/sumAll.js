const sumAll = function(start, end) {
  // Check if valid inputs
  if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0) return "ERROR";

  // Swap if start is greater
  if (start > end) {
    [start, end] = [end, start];
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
