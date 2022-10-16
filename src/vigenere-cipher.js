const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 class VigenereCipheringMachine {
  constructor(reversed = true){
      this.notReversed = reversed;
  }

  alphabet = this.createAlphabet()

  createAlphabet(start = 0) {
      const alphabet = [];

      for (let i = 0; alphabet.length < 26; i++){
          if((65 + i + start) < 91) {
              alphabet.push(String.fromCharCode(65 + i + start));
          } else {
              alphabet.push(String.fromCharCode(65 + i + start - 26));
          }
      }

      return alphabet
  }

  generateTable() {
      const table = [];

      for (let i = 0; i < 26; i++) {
          table.push(this.createAlphabet(i));
      }

      return table;
  }

  table = this.generateTable();


  encrypt(message, key) {
    if(!message || !key) throw Error('Incorrect arguments!');
    const encryptedSymbols = [];
    const startMessage = Array.from(message.toUpperCase());
    const multiple = Math.ceil(startMessage.length / key.length);
    const startKey = Array.from(key.toUpperCase().repeat(multiple).slice(0, startMessage.length));

  let shiftCount = 0;

    startMessage.forEach((elem, index) => {
      if(this.alphabet.indexOf(elem) === -1) {
          encryptedSymbols.push(elem);
          shiftCount++;
      } else {
          const columnIndex = this.alphabet.indexOf(elem);
          const rowIndex = this.alphabet.indexOf(startKey[index - shiftCount]);

          encryptedSymbols.push(this.table[columnIndex][rowIndex]);
      }
    })

    return this.notReversed ? encryptedSymbols.join('') : encryptedSymbols.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
      if(!encryptedMessage || !key) throw Error('Incorrect arguments!');
      const decryptedSymbols = [];
      const startMessage = Array.from(encryptedMessage.toUpperCase());
      const multiple = Math.ceil(startMessage.length / key.length);
      const startKey = Array.from(key.toUpperCase().repeat(multiple).slice(0, startMessage.length));

      let shiftCount = 0;

      startMessage.forEach((elem, index) => {
        if(this.alphabet.indexOf(elem) === -1) {
            decryptedSymbols.push(elem);
            shiftCount++;
        } else {
            const currentAlphabet = this.alphabet.indexOf(startKey[index - shiftCount]);
            const currentAlpha = this.alphabet[this.alphabet.indexOf(elem)];

            const decryptedSymbol = this.alphabet[this.table[currentAlphabet].indexOf(currentAlpha)];
            decryptedSymbols.push(decryptedSymbol);
        }
      })

      return this.notReversed ? decryptedSymbols.join('') : decryptedSymbols.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
