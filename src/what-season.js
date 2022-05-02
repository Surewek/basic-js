const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    
    if (Object.getOwnPropertyNames(date).length > 0) throw Error("Invalid date!");
    if (!(date instanceof Date)) throw Error("Invalid date!");

    const monthNumber = date.getMonth();

    if(monthNumber == 0 || monthNumber == 1 || monthNumber == 11) {
      result = 'winter';
    }
    if(monthNumber >= 2 && monthNumber <= 4) {
      result = 'spring';
    }
    if(monthNumber >= 5 && monthNumber <= 7) {
      result = 'summer';
    }
    if(monthNumber >= 8 && monthNumber <= 10) {
      result = 'fall';
    }

    return result;
}

module.exports = {
  getSeason
};
