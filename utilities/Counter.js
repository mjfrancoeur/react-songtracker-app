
class Counter {
  constructor() {
    this.count = 1;
  }

  generateKey() {
    return this.count++;
  }
}


module.exports = Counter;
