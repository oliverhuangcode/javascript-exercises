const removeFromArray = function(array, ...remove) {
  for (const args of remove) {
    array = array.filter(a => a !== args);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
