const { NotImplementedError } = require('../extensions/index.js');

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
  let newStr = '';
  let addStr = '';
  str = str ?? `${str}`;
  options.repeatTimes = isNaN(+options.repeatTimes) ? 1 : +options.repeatTimes;
  options.separator = options.separator ?? '+';
  options.addition = options.addition || options.addition === false || options.addition === null ? `${options.addition}` : '';
  options.additionRepeatTimes = isNaN(+options.additionRepeatTimes) ? 1 : +options.additionRepeatTimes;
  options.additionSeparator = options.additionSeparator ?? '|';

  if(options.addition !== '' && options.additionRepeatTimes > 0) {
    for(let j = 1; j <= options.additionRepeatTimes; j++){
    console.log(options.repeatTimes)
    if(j == options.additionRepeatTimes){
      addStr += `${options.addition}`
      console.log(addStr)
    } else {
      addStr += `${options.addition}${options.additionSeparator}`
      console.log(addStr)
    }
  }

  }

  if( options.repeatTimes > 0) {
  for(let i = 1; i <= options.repeatTimes; i++){
    console.log(options.repeatTimes)
    if(i == options.repeatTimes){
      newStr += `${str}${addStr}`
      console.log(newStr)
    } else {
      newStr += `${str}${addStr}${options.separator}`
      console.log(newStr)
    }
    
  }
}

  return newStr == '' ? str : newStr;
}

module.exports = {
  repeater
};
