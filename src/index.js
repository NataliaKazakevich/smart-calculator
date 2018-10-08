class SmartCalculator {
  constructor(initialValue) {
    this.expression = initialValue;
    return this;
  }

  add(number) {
    this.expression += '+'+ number;
    return this;
  }
  
  subtract(number) {
    this.expression += '-'+ number;
    return this;
  }

  multiply(number) {
    this.expression += '*'+ number;
    return this;
  }

  devide(number) {
    this.expression += '/' + number;
    return this;
  }

  pow(number) {
    this.expression += '^ '+ number;
    return this;
  }
  
concl() {
  return eval( this.expression);
}
}

module.exports = SmartCalculator;

