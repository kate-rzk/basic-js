const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // Flatten the 2D array into a 1D array
  const flatBackyard = backyard.flat();
  
  // Count the number of occurrences of the ears
  const numCats = flatBackyard.reduce((acc, curr) => {
    if (curr === "^^") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  
  return numCats;
}

module.exports = {
  countCats
};
