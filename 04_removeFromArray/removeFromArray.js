const removeFromArray = function(array, ...remove) {
  return array.filter(a => remove.includes(a));
};

// Do not edit below this line
module.exports = removeFromArray;
