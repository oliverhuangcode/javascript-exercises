const repeatString = function(text, repeat) {
  let out = "";
  if (repeat < 0) return "ERROR";
  for (let i = 0; i < repeat; i++) {
    out += text;
  }
  return out;
};

// Do not edit below this line
module.exports = repeatString;
