const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);

    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || (position <= 0 || position >= this.chain.length)) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    this.chain = this.chain.filter((element, index) => index !== position - 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;    
  },
  finishChain() {
    const finalChain = this.chain.map(link => `( ${link} )`).join(`~~`);
    this.chain.length = 0;
    
    return finalChain;
  }
};

module.exports = {
  chainMaker
};
