const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const stringToStr = String(str);
  
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  let repeatedAddition = "";

  if (options.addition !== undefined) {
    const additionToStr = String(options.addition);

    repeatedAddition = new Array(options.additionRepeatTimes)
      .fill(additionToStr)
      .join(additionSeparator);
  }

  const repeatedString = new Array(repeatTimes)
    .fill(stringToStr + repeatedAddition)
    .join(separator);

  return repeatedString;
}

module.exports = {
  repeater,
};
